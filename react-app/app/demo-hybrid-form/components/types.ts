// Types
export interface FieldType {
  type: string;
  name: string;
}
export interface FormContext {
  fields: FieldType[];
  viewLabel: string;
}

export interface ViewListProps {
  data: string[];
}
