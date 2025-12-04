import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { useTheme } from "./ThemeProvider";

function CookieConsentBanner() {
    const { theme } = useTheme();

    useEffect(() => {
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
    }, [theme]);

    return null;
}

export default CookieConsentBanner;
