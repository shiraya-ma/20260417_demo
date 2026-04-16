import { Case, type CaseProps } from "./ui";

const cases: CaseProps[] = [
  {
    title: "innerHTML & <br/>",
    src: "document.querySelector('div#dist').innerHTML = 'hello<br/>world'",
    dist: "hello<br/>world",
    property: "innerHTML",
  },
  {
    title: "innerHTML & \\n",
    src: "document.querySelector('div#dist').innerHTML = 'hello\\nworld'",
    dist: "hello\nworld",
    property: "innerHTML",
  },
  {
    title: "textContent & <br/>",
    src: "document.querySelector('div#dist').textContent = 'hello<br/>world'",
    dist: "hello<br/>world",
    property: "textContent",
  },
  {
    title: "textContent & \\n",
    src: "document.querySelector('div#dist').textContent = 'hello\\nworld'",
    dist: "hello\nworld",
    property: "textContent",
  },
];

export const App = () => (
  <main className="flex flex-col gap-4">
    <h1 className="text-4xl">demo</h1>

    {cases.map((props, index) => (
      <Case
        key={index}
        {...props}
      />
    ))}
  </main>
);