<div className={styles.grid}>
  {games.map((g) => (
    <GameCard
      key={g.id}
      id={g.id}
      img={g.img}
      title={g.title}
      desc={g.desc}
    />
  ))}
</div>
