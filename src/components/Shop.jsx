export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Warm and comfortable snowboarding clothes</h2>
      <ul id="products">{children}</ul>
    </section>
  );
}
