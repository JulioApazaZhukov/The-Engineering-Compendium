import type { CategoryOption, Subcategories } from "../types"

// Categories for filtering
export const categories: CategoryOption[] = [
  {
    value: "all",
    label: {
      en: "All Categories",
      es: "Todas las Categorías",
    },
  },
  {
    value: "calculus",
    label: {
      en: "Calculus",
      es: "Cálculo",
    },
  },
  {
    value: "trigonometry",
    label: {
      en: "Trigonometry",
      es: "Trigonometría",
    },
  },
  {
    value: "algebra",
    label: {
      en: "Algebra",
      es: "Álgebra",
    },
  },
  {
    value: "geometry",
    label: {
      en: "Geometry",
      es: "Geometría",
    },
  },
  {
    value: "statistics",
    label: {
      en: "Statistics",
      es: "Estadística",
    },
  },
  {
    value: "physics",
    label: {
      en: "Physics",
      es: "Física",
    },
  },
]

// Subcategories for filtering
export const subcategories: Subcategories = {
  calculus: [
    {
      value: "all",
      label: {
        en: "All Subcategories",
        es: "Todas las Subcategorías",
      },
    },
    {
      value: "differentiation",
      label: {
        en: "Differentiation",
        es: "Diferenciación",
      },
    },
    {
      value: "integration",
      label: {
        en: "Integration",
        es: "Integración",
      },
    },
    {
      value: "limits",
      label: {
        en: "Limits",
        es: "Límites",
      },
    },
    {
      value: "series",
      label: {
        en: "Series",
        es: "Series",
      },
    },
  ],
  trigonometry: [
    {
      value: "all",
      label: {
        en: "All Subcategories",
        es: "Todas las Subcategorías",
      },
    },
    {
      value: "identities",
      label: {
        en: "Identities",
        es: "Identidades",
      },
    },
    {
      value: "functions",
      label: {
        en: "Functions",
        es: "Funciones",
      },
    },
    {
      value: "equations",
      label: {
        en: "Equations",
        es: "Ecuaciones",
      },
    },
  ],
  algebra: [
    {
      value: "all",
      label: {
        en: "All Subcategories",
        es: "Todas las Subcategorías",
      },
    },
    {
      value: "equations",
      label: {
        en: "Equations",
        es: "Ecuaciones",
      },
    },
    {
      value: "expansions",
      label: {
        en: "Expansions",
        es: "Expansiones",
      },
    },
    {
      value: "factorization",
      label: {
        en: "Factorization",
        es: "Factorización",
      },
    },
  ],
  geometry: [
    {
      value: "all",
      label: {
        en: "All Subcategories",
        es: "Todas las Subcategorías",
      },
    },
    {
      value: "plane",
      label: {
        en: "Plane Geometry",
        es: "Geometría Plana",
      },
    },
    {
      value: "solid",
      label: {
        en: "Solid Geometry",
        es: "Geometría Sólida",
      },
    },
    {
      value: "analytic",
      label: {
        en: "Analytic Geometry",
        es: "Geometría Analítica",
      },
    },
  ],
  statistics: [
    {
      value: "all",
      label: {
        en: "All Subcategories",
        es: "Todas las Subcategorías",
      },
    },
    {
      value: "descriptive",
      label: {
        en: "Descriptive Statistics",
        es: "Estadística Descriptiva",
      },
    },
    {
      value: "probability",
      label: {
        en: "Probability",
        es: "Probabilidad",
      },
    },
    {
      value: "distributions",
      label: {
        en: "Distributions",
        es: "Distribuciones",
      },
    },
    {
      value: "correlation",
      label: {
        en: "Correlation",
        es: "Correlación",
      },
    },
  ],
  physics: [
    {
      value: "all",
      label: {
        en: "All Subcategories",
        es: "Todas las Subcategorías",
      },
    },
    {
      value: "mechanics",
      label: {
        en: "Mechanics",
        es: "Mecánica",
      },
    },
    {
      value: "electricity",
      label: {
        en: "Electricity",
        es: "Electricidad",
      },
    },
    {
      value: "electromagnetism",
      label: {
        en: "Electromagnetism",
        es: "Electromagnetismo",
      },
    },
    {
      value: "relativity",
      label: {
        en: "Relativity",
        es: "Relatividad",
      },
    },
    {
      value: "thermodynamics",
      label: {
        en: "Thermodynamics",
        es: "Termodinámica",
      },
    },
  ],
}
