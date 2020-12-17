<template>
  <div class="about">
    <h1>Über das Projekt</h1>
    <article>
      <div>
        <h3>Hydroponisches Gewächshaus</h3>
        <div>
          <p>
            <span>
              In dem Projekt geht es darum, ein vollautomatisches,
              hydroponisches Gewächshaus zu entwickeln, in dem dann Salat und
              Erdbeeren gezüchtet werden können.
            </span>
          </p>
        </div>
      </div>
      <div>
        <figure>
          <img
            src="https://www.trees.com/sites/default/files/inline-images/vertical-hydroponics.png"
            alt="Hydroponisches Gewächshaus"
          />
          <figcaption>
            Bildquelle:
            <a
              href="https://www.trees.com/gardening-and-landscaping/vertical-hydroponics"
              >https://www.trees.com/gardening-and-landscaping/vertical-hydroponics</a
            >
          </figcaption>
        </figure>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
@import "../global/global.scss";

article {
  background: $primary-25;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 4px solid $primary;
  border-radius: 10px;
  box-shadow: 2px 2px $secondary-75;
  font-size: 1.5em;
  color: $secondary;
  display: flex;
}
</style>
