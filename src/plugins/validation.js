import {configure, defineRule} from "vee-validate";
import {localize} from '@vee-validate/i18n';
import {min, email, required} from "@vee-validate/rules";
import en from '@vee-validate/i18n/dist/locale/en.json';
import fr from '@vee-validate/i18n/dist/locale/fr.json';
import i18n from "@/i18n";

//-> Define the rule globally
defineRule('required', required);
defineRule('min', min);
defineRule('email', email);

//-> Define the custom rule
defineRule("english", (value) => {
    if (!value || !value.length) {
        return true;
    }
    if (!/^[a-zA-Z]+$/.test(value)) {
        return i18n.global.t('validation.just-english-is-valid');
    }
    return true;
});

configure({
    generateMessage: localize({
        en,
        fr,
    }),
});

