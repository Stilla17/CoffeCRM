import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  description,
  type = "text",
  isForm = false,
  ...props
}) => {
  if (isForm && name && control) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}

            <FormControl>
              <Input {...field} type={type} placeholder={placeholder} />
            </FormControl>

            {description && <FormDescription>{description}</FormDescription>}

            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
  return <Input type={type} placeholder={placeholder} {...props} />;
};

export default CustomInput;
