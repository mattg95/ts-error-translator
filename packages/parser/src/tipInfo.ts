import { Tip } from './tips';

type MaybeArray<T> = T | T[];
type Difficulty = 'easy' | 'not-easy';

type Link = {
  url: string;
};

export type TipInfoItem<Type extends Tip['type'] = Tip['type']> = {
  name: string;
  message: string;
  deps?: MaybeArray<Exclude<Tip['type'], Type>>;
  link: Link;
  difficulty: Difficulty;
};

export type TipInfo = {
  [Type in Tip['type']]?: TipInfoItem<Type>;
};

export const tipInfo: TipInfo = {
  bigint: {
    name: 'BigInt type',
    message: `The bigint type lets you represent integers that are too large to be represented by 'number'.`,
    link: {
      url: 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint',
    },
    difficulty: 'not-easy',
  },
  'as-const': {
    name: 'const assertions',
    message: `const assertions let you mark an expression as deeply immutable. This means it gets narrowed to its narrowest possible type.`,
    difficulty: 'not-easy',
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/mutability#deep-immutability-with-as-const',
    },
  },
  'as-const-on-object': {
    name: 'const assertions on objects',
    message: `const assertions on objects let you mark an object as deeply immutable. This means its attributes get narrowed to their literal types.`,
    difficulty: 'not-easy',
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/mutability#deep-immutability-with-as-const',
    },
    deps: 'as-const',
  },
  infer: {
    name: 'Infer keyword',
    message: `The infer keyword lets you infer the type of a generic type parameter inside a conditional type.`,
    link: {
      url: 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types',
    },
    deps: 'conditional-type',
    difficulty: 'not-easy',
  },
  'basic-types': {
    name: 'Basic Types',
    message: 'string, number and boolean are all basic types.',
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#the-basic-types',
    },
    difficulty: 'easy',
  },
  'awaited-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Awaited utility type',
    message: `The Awaited utility type lets you get the type of a Promise's resolved value.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types#awaited',
    },
    difficulty: 'not-easy',
  },
  'partial-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Partial utility type',
    message: `The Partial utility type lets you make all the properties of an object optional.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/objects#partial',
    },
    difficulty: 'not-easy',
  },
  'required-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Required utility type',
    message: `The Required utility type lets you make all the properties of an object required.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/objects#required',
    },
    difficulty: 'not-easy',
  },
  'readonly-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Readonly utility type',
    message: `The Readonly utility type lets you make all the properties of an object readonly.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/mutability#readonly-object-properties',
    },
    difficulty: 'not-easy',
  },
  'omit-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Omit utility type',
    message: `The Omit utility type lets you create an object type by omitting a set of properties from another type.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/objects#omit',
    },
    difficulty: 'not-easy',
  },
  'exclude-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Exclude utility type',
    message: `The Exclude utility type lets you exclude some members of a union type.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude',
    },
    difficulty: 'not-easy',
  },
  'extract-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Extract utility type',
    message: `The Extract utility type lets you extract some members of a union type.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude',
    },
    difficulty: 'not-easy',
  },
  'nonnullable-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'NonNullable utility type',
    message: `The NonNullable utility type lets you exclude null and undefined from a union type.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude',
    },
    difficulty: 'not-easy',
  },
  'record-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Record utility type',
    message: `The Record utility type lets you create an object type with a set of properties whose keys are of one type and whose values are of another type.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude',
    },
    difficulty: 'not-easy',
  },
  'returntype-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'ReturnType utility type',
    message: `The ReturnType utility type lets you get the return type of a function type.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude',
    },
    difficulty: 'not-easy',
  },
  'lowercase-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Lowercase utility type',
    message: `The Lowercase utility type lets you convert a string literal type to a string literal type with all characters lowercase.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude',
    },
    difficulty: 'not-easy',
  },
  'uppercase-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Uppercase utility type',
    message: `The Uppercase utility type lets you convert a string literal type to a string literal type with all characters uppercase.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude',
    },
    difficulty: 'not-easy',
  },
  'parameters-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Parameters utility type',
    message: `The Parameters utility type lets you get the parameters of a function type.`,
    link: {
      url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype',
    },
    difficulty: 'not-easy',
  },
  'pick-utility-type': {
    deps: 'passing-generics-to-types',
    name: 'Pick utility type',
    message: `The Pick utility type lets you create an object type by picking a set of properties from another type.`,
    link: {
      url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys',
    },
    difficulty: 'not-easy',
  },
  'any-type': {
    name: 'Any Type',
    message: `any is a type that pauses type-checking on whatever it's assigned to.`,
    link: {
      url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any',
    },
    difficulty: 'easy',
  },
  'array-type': {
    name: 'Array type',
    message:
      'This is an array type. It represents an array, which can be any length.',
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#arrays',
    },
    difficulty: 'easy',
  },
  // 'declare-global': {
  //   name: 'Declare global',
  //   message: `Declare global is a way to extend the global scope of your project. It's useful for adding types to global variables that are not defined in your project.`,
  // },
  // 'interface-window-in-declare-global': {
  //   name: 'Window interface',
  //   message: `This pattern lets you extend the Window interface to`,
  //   deps: 'declare-global',
  // },
  'passing-generics-to-types': {
    name: 'Passing Types to other Types',
    message: `Just like functions in JavaScript, you can pass types to other types as arguments. Just like functions, they then return other types.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#passing-types-to-functions',
    },
    difficulty: 'not-easy',
  },
  'type-alias-with-generics': {
    name: 'Generics in types',
    deps: ['type-alias-declaration'],
    message: `You can use generics in types to make them more flexible. It turns them into a kind of function, which can return different types depending on what you pass in.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/designing-your-types-in-typescript#generic-types',
    },
    difficulty: 'not-easy',
  },
  'tuple-type': {
    name: 'Tuple type',
    message: `This is a tuple type. It represents an array with a fixed number of elements.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#tuples',
    },
    difficulty: 'not-easy',
  },
  // 'number-indexed-access': {
  //   name: 'Array member access',
  //   message:
  //     'You can use the number keyword to create a union type of all the members of an array.',
  // },
  'function-return-type': {
    name: 'Function return type',
    message: `This is a function return type. It tells the function what type it should return.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#function-return-types',
    },
    difficulty: 'easy',
  },
  'union-type': {
    name: 'Union type',
    message: `A union type is a type formed from two or more other types, representing values that may be any one of those types.`,
    link: {
      url: `https://www.totaltypescript.com/books/total-typescript-essentials/unions-literals-and-narrowing#union-types`,
    },
    difficulty: 'easy',
  },
  'as-assertion': {
    name: `'as' Type assertion`,
    message: `This is a type assertion. It's a way to tell TypeScript that you know better than it does what the type of something is.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/annotations-and-assertions#the-as-assertion',
    },
    difficulty: 'easy',
  },
  'ts-object-type': {
    name: 'Object Literal Type',
    message: `This is an object type. It's used to represent object types in TypeScript`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#object-literal-types',
    },
    difficulty: 'easy',
  },
  'type-predicate': {
    name: 'Type predicate',
    message: `This is a type predicate. It turns the function into a type guard which asserts this 'is' statement.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/utility-folder-development-in-typescript#type-predicates',
    },
    difficulty: 'not-easy',
  },
  'interface-declaration': {
    name: 'Interface declaration',
    message: `This is an interface declaration. It's like a type alias, but it can be extended.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/objects#interfaces',
    },
    difficulty: 'easy',
  },
  'never-keyword': {
    name: 'Never keyword',
    message: `This is the never keyword. It's a way to represent the type of something that should never occur.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/unions-literals-and-narrowing#the-narrowest-type-never',
    },
    difficulty: 'not-easy',
  },
  'in-operator-narrowing': {
    name: 'In operator narrowing',
    message: `You can use the 'in' operator to narrow the type of a variable.`,
    link: {
      url: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing',
    },
    difficulty: 'not-easy',
  },
  'non-null-expression': {
    name: 'Non-null assertion',
    message: `You can postfix an expression with ! to tell TypeScript that you know it's not null or undefined. This works the same as an 'as' assertion.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/annotations-and-assertions#the-non-null-assertion',
    },
    difficulty: 'not-easy',
  },
  'literal-type': {
    name: 'Literal type',
    message: `This is a literal type. It's a way to represent a specific value in TypeScript.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/unions-literals-and-narrowing#literal-types',
    },
    difficulty: 'easy',
  },
  'optional-object-property': {
    name: 'Optional Object Property',
    message: `The question mark next to this object property means that it's optional - it doesn't need to be specified on this object.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#optional-object-properties',
    },
    difficulty: 'easy',
  },
  'readonly-object-property': {
    name: 'Readonly Object Property',
    message: `The readonly keyword means that this property can't be changed after it's been set.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/mutability#readonly-object-properties',
    },
    difficulty: 'easy',
  },
  'type-alias-declaration': {
    name: 'Type Keyword',
    message: `This is a type alias. It's like an interface, but it can't be extended - and it can represent things that interfaces can't.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#type-aliases',
    },
    difficulty: 'easy',
  },
  'variable-type-annotation': {
    name: 'Variable type annotation',
    message: `This annotation tells the variable what type it should be.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/annotations-and-assertions#annotating-variables-vs-values',
    },
    difficulty: 'easy',
  },
  'typing-function-parameters': {
    name: 'Function parameter type annotation',
    message: `This annotation tells the function what type the parameter should be.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#function-parameter-annotations',
    },
    difficulty: 'easy',
  },
  'conditional-type': {
    name: 'Conditional type',
    message: `This is a conditional type. It's a kind of if-else logic in TypeScript, but at the type level.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/designing-your-types-in-typescript#conditional-types',
    },
    difficulty: 'not-easy',
  },
  'nested-conditional-type': {
    name: 'Nested conditional type',
    message: `Conditional types can be nested in TypeScript!`,
    deps: ['conditional-type'],
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/designing-your-types-in-typescript#conditional-types',
    },
    difficulty: 'not-easy',
  },
  keyof: {
    name: 'keyof',
    message: `The keyof operator takes a type and returns a union of its keys.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types#the-keyof-operator',
    },
    difficulty: 'not-easy',
  },
  typeof: {
    name: 'typeof',
    message: `The typeof operator can be used to infer the type of a runtime construct.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/deriving-types#the-typeof-operator',
    },
    difficulty: 'not-easy',
  },
  'generic-slots-in-functions': {
    name: 'Type Parameters in Functions',
    message: `You can add type parameters to functions to infer types based on what you call your function with.`,
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/utility-folder-development-in-typescript#generic-functions',
    },
    difficulty: 'not-easy',
  },
  'mapped-type': {
    name: 'Mapped types',
    message:
      'You can use a mapped type to create objects by iterating over keys.',
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/designing-your-types-in-typescript#mapped-types',
    },
    difficulty: 'not-easy',
  },
  'remapping-in-mapped-type': {
    name: "Key remapping via 'as'",
    deps: ['mapped-type'],
    link: {
      url: 'https://www.totaltypescript.com/books/total-typescript-essentials/designing-your-types-in-typescript#key-remapping-with-as',
    },
    message: 'You can remap keys in mapped types using the "as" keyword.',
    difficulty: 'not-easy',
  },
};
