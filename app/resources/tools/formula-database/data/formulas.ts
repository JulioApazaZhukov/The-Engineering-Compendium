import type { Formula } from "../types"

// Formula database
export const formulas: Formula[] = [
  // Existing Calculus formulas
  {
    id: "diff-power-rule",
    title: {
      en: "Power Rule",
      es: "Regla de la Potencia",
    },
    formula: "\\frac{d}{dx}[x^n] = nx^{n-1}",
    category: "calculus",
    subcategory: "differentiation",
    description: {
      en: "The derivative of x raised to a power n is n times x raised to the power n-1.",
      es: "La derivada de x elevado a una potencia n es n veces x elevado a la potencia n-1.",
    },
    tags: ["differentiation", "power", "basic"],
  },
  {
    id: "diff-product-rule",
    title: {
      en: "Product Rule",
      es: "Regla del Producto",
    },
    formula: "\\frac{d}{dx}[f(x) \\cdot g(x)] = f(x) \\cdot \\frac{d}{dx}[g(x)] + g(x) \\cdot \\frac{d}{dx}[f(x)]",
    category: "calculus",
    subcategory: "differentiation",
    description: {
      en: "The derivative of a product of two functions is the first function times the derivative of the second, plus the second function times the derivative of the first.",
      es: "La derivada de un producto de dos funciones es la primera función por la derivada de la segunda, más la segunda función por la derivada de la primera.",
    },
    tags: ["differentiation", "product", "intermediate"],
  },
  {
    id: "diff-quotient-rule",
    title: {
      en: "Quotient Rule",
      es: "Regla del Cociente",
    },
    formula:
      "\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{g(x) \\cdot \\frac{d}{dx}[f(x)] - f(x) \\cdot \\frac{d}{dx}[g(x)]}{[g(x)]^2}",
    category: "calculus",
    subcategory: "differentiation",
    description: {
      en: "The derivative of a quotient of two functions follows this formula where the denominator is squared.",
      es: "La derivada de un cociente de dos funciones sigue esta fórmula donde el denominador está elevado al cuadrado.",
    },
    tags: ["differentiation", "quotient", "intermediate"],
  },
  {
    id: "diff-chain-rule",
    title: {
      en: "Chain Rule",
      es: "Regla de la Cadena",
    },
    formula: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)",
    category: "calculus",
    subcategory: "differentiation",
    description: {
      en: "The derivative of a composite function is the derivative of the outer function evaluated at the inner function, multiplied by the derivative of the inner function.",
      es: "La derivada de una función compuesta es la derivada de la función externa evaluada en la función interna, multiplicada por la derivada de la función interna.",
    },
    tags: ["differentiation", "chain", "intermediate"],
  },
  {
    id: "int-basic",
    title: {
      en: "Basic Integration",
      es: "Integración Básica",
    },
    formula: "\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C, \\quad n \\neq -1",
    category: "calculus",
    subcategory: "integration",
    description: {
      en: "The integral of x raised to a power n is x raised to the power n+1 divided by n+1, plus a constant of integration. This rule does not apply when n = -1.",
      es: "La integral de x elevado a una potencia n es x elevado a la potencia n+1 dividido por n+1, más una constante de integración. Esta regla no se aplica cuando n = -1.",
    },
    tags: ["integration", "power", "basic"],
  },
  {
    id: "int-parts",
    title: {
      en: "Integration by Parts",
      es: "Integración por Partes",
    },
    formula: "\\int u \\, dv = uv - \\int v \\, du",
    category: "calculus",
    subcategory: "integration",
    description: {
      en: "A technique for integrating products of functions, based on the product rule for differentiation.",
      es: "Una técnica para integrar productos de funciones, basada en la regla del producto para la diferenciación.",
    },
    tags: ["integration", "parts", "intermediate"],
  },
  {
    id: "int-substitution",
    title: {
      en: "Integration by Substitution",
      es: "Integración por Sustitución",
    },
    formula: "\\int f(g(x))g'(x) \\, dx = \\int f(u) \\, du, \\quad \\text{where} \\quad u = g(x)",
    category: "calculus",
    subcategory: "integration",
    description: {
      en: "A method for simplifying integrals by substituting a new variable, based on the chain rule for differentiation.",
      es: "Un método para simplificar integrales mediante la sustitución de una nueva variable, basado en la regla de la cadena para la diferenciación.",
    },
    tags: ["integration", "substitution", "intermediate"],
  },

  // Existing Trigonometry formulas
  {
    id: "trig-pythagorean",
    title: {
      en: "Pythagorean Identity",
      es: "Identidad Pitagórica",
    },
    formula: "\\sin^2(x) + \\cos^2(x) = 1",
    category: "trigonometry",
    subcategory: "identities",
    description: {
      en: "The fundamental trigonometric identity relating sine and cosine functions.",
      es: "La identidad trigonométrica fundamental que relaciona las funciones seno y coseno.",
    },
    tags: ["trigonometry", "identity", "basic"],
  },
  {
    id: "trig-double-angle-sin",
    title: {
      en: "Double Angle Formula (Sine)",
      es: "Fórmula del Ángulo Doble (Seno)",
    },
    formula: "\\sin(2x) = 2\\sin(x)\\cos(x)",
    category: "trigonometry",
    subcategory: "identities",
    description: {
      en: "Formula for the sine of twice an angle in terms of the sine and cosine of the original angle.",
      es: "Fórmula para el seno del doble de un ángulo en términos del seno y coseno del ángulo original.",
    },
    tags: ["trigonometry", "identity", "double angle"],
  },
  {
    id: "trig-double-angle-cos",
    title: {
      en: "Double Angle Formula (Cosine)",
      es: "Fórmula del Ángulo Doble (Coseno)",
    },
    formula: "\\cos(2x) = \\cos^2(x) - \\sin^2(x) = 2\\cos^2(x) - 1 = 1 - 2\\sin^2(x)",
    category: "trigonometry",
    subcategory: "identities",
    description: {
      en: "Formula for the cosine of twice an angle in terms of the sine and cosine of the original angle.",
      es: "Fórmula para el coseno del doble de un ángulo en términos del seno y coseno del ángulo original.",
    },
    tags: ["trigonometry", "identity", "double angle"],
  },

  // Existing Algebra formulas
  {
    id: "algebra-quadratic",
    title: {
      en: "Quadratic Formula",
      es: "Fórmula Cuadrática",
    },
    formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad \\text{for} \\quad ax^2 + bx + c = 0",
    category: "algebra",
    subcategory: "equations",
    description: {
      en: "Formula for finding the roots of a quadratic equation.",
      es: "Fórmula para encontrar las raíces de una ecuación cuadrática.",
    },
    tags: ["algebra", "quadratic", "basic"],
  },
  {
    id: "algebra-binomial",
    title: {
      en: "Binomial Theorem",
      es: "Teorema del Binomio",
    },
    formula: "(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k",
    category: "algebra",
    subcategory: "expansions",
    description: {
      en: "Formula for expanding a binomial raised to a power.",
      es: "Fórmula para expandir un binomio elevado a una potencia.",
    },
    tags: ["algebra", "binomial", "intermediate"],
  },

  // New Statistics formulas
  {
    id: "stats-mean",
    title: {
      en: "Arithmetic Mean",
      es: "Media Aritmética",
    },
    formula: "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i = \\frac{x_1 + x_2 + \\ldots + x_n}{n}",
    category: "statistics",
    subcategory: "descriptive",
    description: {
      en: "The arithmetic mean (average) is the sum of all values divided by the number of values.",
      es: "La media aritmética (promedio) es la suma de todos los valores dividida por el número de valores.",
    },
    tags: ["statistics", "mean", "basic"],
  },
  {
    id: "stats-variance",
    title: {
      en: "Variance",
      es: "Varianza",
    },
    formula: "\\sigma^2 = \\frac{1}{n}\\sum_{i=1}^{n} (x_i - \\bar{x})^2",
    category: "statistics",
    subcategory: "descriptive",
    description: {
      en: "The variance measures how far a set of numbers are spread out from their average value.",
      es: "La varianza mide qué tan disperso está un conjunto de números respecto a su valor promedio.",
    },
    tags: ["statistics", "variance", "intermediate"],
  },
  {
    id: "stats-standard-deviation",
    title: {
      en: "Standard Deviation",
      es: "Desviación Estándar",
    },
    formula: "\\sigma = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n} (x_i - \\bar{x})^2}",
    category: "statistics",
    subcategory: "descriptive",
    description: {
      en: "The standard deviation is a measure of the amount of variation or dispersion of a set of values.",
      es: "La desviación estándar es una medida de la cantidad de variación o dispersión de un conjunto de valores.",
    },
    tags: ["statistics", "standard deviation", "intermediate"],
  },
  {
    id: "stats-normal-distribution",
    title: {
      en: "Normal Distribution",
      es: "Distribución Normal",
    },
    formula: "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}",
    category: "statistics",
    subcategory: "distributions",
    description: {
      en: "The probability density function of the normal distribution, where μ is the mean and σ is the standard deviation.",
      es: "La función de densidad de probabilidad de la distribución normal, donde μ es la media y σ es la desviación estándar.",
    },
    tags: ["statistics", "normal distribution", "advanced"],
  },
  {
    id: "stats-binomial-distribution",
    title: {
      en: "Binomial Distribution",
      es: "Distribución Binomial",
    },
    formula: "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}",
    category: "statistics",
    subcategory: "distributions",
    description: {
      en: "The probability mass function of the binomial distribution, where n is the number of trials, k is the number of successes, and p is the probability of success in a single trial.",
      es: "La función de masa de probabilidad de la distribución binomial, donde n es el número de ensayos, k es el número de éxitos, y p es la probabilidad de éxito en un solo ensayo.",
    },
    tags: ["statistics", "binomial distribution", "intermediate"],
  },
  {
    id: "stats-correlation",
    title: {
      en: "Correlation Coefficient",
      es: "Coeficiente de Correlación",
    },
    formula:
      "r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{x})^2 \\sum_{i=1}^{n} (y_i - \\bar{y})^2}}",
    category: "statistics",
    subcategory: "correlation",
    description: {
      en: "The Pearson correlation coefficient measures the linear correlation between two variables X and Y.",
      es: "El coeficiente de correlación de Pearson mide la correlación lineal entre dos variables X e Y.",
    },
    tags: ["statistics", "correlation", "advanced"],
  },

  // New Physics formulas
  {
    id: "physics-newton-second",
    title: {
      en: "Newton's Second Law",
      es: "Segunda Ley de Newton",
    },
    formula: "\\vec{F} = m\\vec{a}",
    category: "physics",
    subcategory: "mechanics",
    description: {
      en: "The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.",
      es: "La aceleración de un objeto es directamente proporcional a la fuerza neta que actúa sobre él e inversamente proporcional a su masa.",
    },
    tags: ["physics", "mechanics", "basic"],
  },
  {
    id: "physics-kinetic-energy",
    title: {
      en: "Kinetic Energy",
      es: "Energía Cinética",
    },
    formula: "E_k = \\frac{1}{2}mv^2",
    category: "physics",
    subcategory: "mechanics",
    description: {
      en: "The energy possessed by an object due to its motion, where m is mass and v is velocity.",
      es: "La energía que posee un objeto debido a su movimiento, donde m es la masa y v es la velocidad.",
    },
    tags: ["physics", "energy", "basic"],
  },
  {
    id: "physics-potential-energy",
    title: {
      en: "Gravitational Potential Energy",
      es: "Energía Potencial Gravitatoria",
    },
    formula: "E_p = mgh",
    category: "physics",
    subcategory: "mechanics",
    description: {
      en: "The energy possessed by an object due to its position in a gravitational field, where m is mass, g is gravitational acceleration, and h is height.",
      es: "La energía que posee un objeto debido a su posición en un campo gravitatorio, donde m es la masa, g es la aceleración gravitatoria, y h es la altura.",
    },
    tags: ["physics", "energy", "basic"],
  },
  {
    id: "physics-ohms-law",
    title: {
      en: "Ohm's Law",
      es: "Ley de Ohm",
    },
    formula: "V = IR",
    category: "physics",
    subcategory: "electricity",
    description: {
      en: "The current through a conductor between two points is directly proportional to the voltage across the two points, where V is voltage, I is current, and R is resistance.",
      es: "La corriente a través de un conductor entre dos puntos es directamente proporcional al voltaje entre los dos puntos, donde V es el voltaje, I es la corriente, y R es la resistencia.",
    },
    tags: ["physics", "electricity", "basic"],
  },
  {
    id: "physics-lorentz-force",
    title: {
      en: "Lorentz Force",
      es: "Fuerza de Lorentz",
    },
    formula: "\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})",
    category: "physics",
    subcategory: "electromagnetism",
    description: {
      en: "The force on a charged particle due to electromagnetic fields, where q is the electric charge, E is the electric field, v is the velocity, and B is the magnetic field.",
      es: "La fuerza sobre una partícula cargada debido a campos electromagnéticos, donde q es la carga eléctrica, E es el campo eléctrico, v es la velocidad, y B es el campo magnético.",
    },
    tags: ["physics", "electromagnetism", "advanced"],
  },
  {
    id: "physics-special-relativity",
    title: {
      en: "Mass-Energy Equivalence",
      es: "Equivalencia Masa-Energía",
    },
    formula: "E = mc^2",
    category: "physics",
    subcategory: "relativity",
    description: {
      en: "Einstein's famous equation showing that mass and energy are equivalent, where E is energy, m is mass, and c is the speed of light in vacuum.",
      es: "La famosa ecuación de Einstein que muestra que la masa y la energía son equivalentes, donde E es la energía, m es la masa, y c es la velocidad de la luz en el vacío.",
    },
    tags: ["physics", "relativity", "advanced"],
  },

  // New Geometry formulas
  {
    id: "geometry-circle-area",
    title: {
      en: "Circle Area",
      es: "Área del Círculo",
    },
    formula: "A = \\pi r^2",
    category: "geometry",
    subcategory: "plane",
    description: {
      en: "The area of a circle with radius r.",
      es: "El área de un círculo con radio r.",
    },
    tags: ["geometry", "circle", "basic"],
  },
  {
    id: "geometry-circle-circumference",
    title: {
      en: "Circle Circumference",
      es: "Circunferencia del Círculo",
    },
    formula: "C = 2\\pi r",
    category: "geometry",
    subcategory: "plane",
    description: {
      en: "The circumference of a circle with radius r.",
      es: "La circunferencia de un círculo con radio r.",
    },
    tags: ["geometry", "circle", "basic"],
  },
  {
    id: "geometry-sphere-volume",
    title: {
      en: "Sphere Volume",
      es: "Volumen de la Esfera",
    },
    formula: "V = \\frac{4}{3}\\pi r^3",
    category: "geometry",
    subcategory: "solid",
    description: {
      en: "The volume of a sphere with radius r.",
      es: "El volumen de una esfera con radio r.",
    },
    tags: ["geometry", "sphere", "basic"],
  },
  {
    id: "geometry-sphere-surface-area",
    title: {
      en: "Sphere Surface Area",
      es: "Área de la Superficie de la Esfera",
    },
    formula: "A = 4\\pi r^2",
    category: "geometry",
    subcategory: "solid",
    description: {
      en: "The surface area of a sphere with radius r.",
      es: "El área de la superficie de una esfera con radio r.",
    },
    tags: ["geometry", "sphere", "basic"],
  },
  {
    id: "geometry-pythagorean-theorem",
    title: {
      en: "Pythagorean Theorem",
      es: "Teorema de Pitágoras",
    },
    formula: "a^2 + b^2 = c^2",
    category: "geometry",
    subcategory: "plane",
    description: {
      en: "In a right triangle, the square of the length of the hypotenuse (c) is equal to the sum of the squares of the lengths of the other two sides (a and b).",
      es: "En un triángulo rectángulo, el cuadrado de la longitud de la hipotenusa (c) es igual a la suma de los cuadrados de las longitudes de los otros dos lados (a y b).",
    },
    tags: ["geometry", "triangle", "basic"],
  },
  {
    id: "geometry-distance-formula",
    title: {
      en: "Distance Formula",
      es: "Fórmula de la Distancia",
    },
    formula: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
    category: "geometry",
    subcategory: "analytic",
    description: {
      en: "The distance between two points (x₁, y₁) and (x₂, y₂) in a Cartesian coordinate system.",
      es: "La distancia entre dos puntos (x₁, y₁) y (x₂, y₂) en un sistema de coordenadas cartesianas.",
    },
    tags: ["geometry", "analytic", "basic"],
  },
]
