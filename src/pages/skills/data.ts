import { ReactComponent as ReactLogo } from "assets/react-logo.svg";

const reactCode = `const debouncedValidator = React.useMemo(() => debounce(validator, 1000), []);
const handleChange = async (name: string, value: any) => {
  setFormData({
    ...formData,
    ..._.set(formData, name, value),
  });
  const error = await debouncedValidator(formData, value, name);
};`

export const skills = {
    react: {
        skill: 'React',
        code: reactCode,
        logo: ReactLogo
    }
}