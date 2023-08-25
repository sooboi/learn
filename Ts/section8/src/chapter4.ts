// 템플릿 리터럴 타입

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// type ColorAnimal = "red-dog" | "red-cat" | "red-chicken" | "black-dog" ...
// 🔽
type ColorAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColorAnimal = "black-cat";
