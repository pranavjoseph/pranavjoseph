import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { useTheme } from "./ThemeProvider";

function CookieConsentBanner() {
    const { theme } = useTheme();

    useEffect(() => {
        const loadGtm = () => {
            if (document.getElementById("gtm-script")) return;

            const gtmScript = document.createElement("script");
            gtmScript.id = "gtm-script";
            gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5CXQC5J2');`;
            document.head.appendChild(gtmScript);

            if (!document.getElementById("gtm-noscript")) {
                const noscript = document.createElement("noscript");
                noscript.id = "gtm-noscript";
                noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CXQC5J2" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
                document.body.appendChild(noscript);
            }
        };

        const loadGtag = () => {
            if (document.getElementById("ga-script")) return;

            const script = document.createElement("script");
            script.id = "ga-script";
            script.async = true;
            script.src = "https://www.googletagmanager.com/gtag/js?id=G-HXRSC3T92B";
            document.head.appendChild(script);

            const inline = document.createElement("script");
            inline.id = "ga-inline";
            inline.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HXRSC3T92B');
        `;
            document.head.appendChild(inline);
        };

        const userAccepted = (category) => {
            try {
                if (typeof CookieConsent.acceptedCategory === "function") {
                    return CookieConsent.acceptedCategory(category);
                }
                if (typeof CookieConsent.allowedCategory === "function") {
                    return CookieConsent.allowedCategory(category);
                }
            } catch (e) {
                return false;
            }
            return false;
        };

        const loadConsentAwareTags = () => {
            const analyticsAllowed = userAccepted("analytics") || userAccepted("ads");
            if (!analyticsAllowed) return;

            loadGtm();
            loadGtag();
        };

        CookieConsent.run({
            guiOptions: {
                consentModal: {
                    layout: "box inline",
                    position: "bottom right",
                    equalWeightButtons: true,
                    flipButtons: false
                },
                preferencesModal: {
                    layout: "box",
                    position: "right",
                    equalWeightButtons: true,
                    flipButtons: false
                }
            },

            onFirstAction: () => {
                loadConsentAwareTags();
            },

            onAccept: () => {
                loadConsentAwareTags();
            },

            onChange: () => {
                loadConsentAwareTags();
            },

            // Enable categories for GTM blocking
            categories: {
                necessary: {
                    readOnly: true
                },
                analytics: {},
                ads: {}
            },

            language: {
                default: "en",
                autoDetect: "browser",
                translations: {
                    en: {
                        consentModal: {
                            title: "We use cookies 🍪",
                            description:
                                "We use cookies to improve your experience, analyse site traffic, and deliver personalised advertising. Non-essential cookies will only be set if you enable them.",
                            acceptAllBtn: "Accept all cookies",
                            acceptNecessaryBtn: "Reject non-essential",
                            showPreferencesBtn: "Manage preferences"
                        },
                        preferencesModal: {
                            title: "Cookie Settings",
                            acceptAllBtn: "Accept all cookies",
                            acceptNecessaryBtn: "Reject non-essential",
                            savePreferencesBtn: "Save preferences",
                            closeIconLabel: "Close settings",
                            serviceCounterLabel: "Service|Services",

                            sections: [
                                {
                                    title: "About Cookies",
                                    description:
                                        "This website uses cookies to improve functionality, analyse traffic and personalise ads. You may disable non-essential categories below."
                                },
                                {
                                    title:
                                        "Strictly Necessary Cookies <span class='pm__badge'>Always enabled</span>",
                                    description:
                                        "These cookies are required for core features such as security, accessibility and remembering your site preferences.",
                                    linkedCategory: "necessary"
                                },
                                {
                                    title: "Analytics Cookies (Google Analytics)",
                                    description:
                                        "Analytics cookies collect anonymous information about how visitors use the site. These will only load if you opt-in. We use Google Analytics 4, compliant with UK GDPR.",
                                    linkedCategory: "analytics"
                                },
                                {
                                    title: "Advertising Cookies (Google Ads / Tag Manager)",
                                    description:
                                        "Advertising cookies help deliver personalised ads and measure ad performance. These require your explicit consent under UK GDPR and PECR.",
                                    linkedCategory: "ads"
                                },
                                {
                                    title: "More information",
                                    description:
                                        "To learn more about how your data is used or to exercise your rights, please see our <a class='cc__link' href='/privacy'>Privacy Policy</a> or <a class='cc__link' href='/contact'>contact me</a>."
                                }
                            ]
                        }
                    }
                }
            }
        });

        // Dark mode sync
        if (theme === "dark") {
            document.documentElement.classList.add("cc--darkmode");
        } else {
            document.documentElement.classList.remove("cc--darkmode");
        }

        // If a returning visitor already consented, load tags immediately
        loadConsentAwareTags();
    }, [theme]);

    return null;
}

export default CookieConsentBanner;
