export interface TranslatedText {
    en: string
    es: string
    [key: string]: string
  }
  
  export interface Formula {
    id: string
    title: TranslatedText
    formula: string
    category: string
    subcategory: string
    description: TranslatedText
    tags: string[]
    // Add the missing properties
    example?: string
    notes?: TranslatedText
  }
  
  export interface CategoryOption {
    value: string
    label: TranslatedText
  }
  
  export interface SubcategoryOption {
    value: string
    label: TranslatedText
  }
  
  export interface Subcategories {
    [category: string]: SubcategoryOption[]
  }
    