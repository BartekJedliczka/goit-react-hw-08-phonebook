import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <h1 className={css.title}>Phonebook welcome</h1>
        <a href="/goit-react-hw-08-phonebook/register">
          <button className={css.btn}>Get Started</button>
        </a>
      </div>
    </div>
  );
}
