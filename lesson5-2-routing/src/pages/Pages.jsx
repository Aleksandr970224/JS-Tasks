const BuildPage = (index) => (
  <>
    <h3>Page {index}</h3>
    <div>
      Page {index} <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ex dolorum libero ea est vero explicabo sit voluptatem? Doloribus, labore earum. Quidem consectetur culpa hic a quas doloremque, asperiores adipisci ratione est velit molestias at numquam in animi minima!</p>
    </div>
  </>
);

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);