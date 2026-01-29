# CHANGELOG

> Package changelog.

<section class="release" id="v0.1.0">

## 0.1.0 (2026-01-29)

<section class="features">

### Features

-   [`9476523`](https://github.com/stdlib-js/stdlib/commit/9476523b10a273a2a9cbd428ae98bf6e70e66480) - add `stats/strided/dvarmpn`

</section>

<!-- /.features -->

<section class="reverts">

### Reverts

-   [`168c7c1`](https://github.com/stdlib-js/stdlib/commit/168c7c18aa58007cf9d7785b9cde69e8e7157c21) - docs: fix example code

</section>

<!-- /.reverts -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`488f765`](https://github.com/stdlib-js/stdlib/commit/488f7650b91db3e3c9170442878643715efc560d): switch order of `mean` and `correction` parameters

    -   To migrate, users should swap `mean` and `correction` arguments.
        This change ensures that the `*varm*` function signatures follow
        similar conventions as found in binary APIs, such as those for
        computing the covariance, where the `mean` parameter immediately
        precedes the array argument.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`2035f34`](https://github.com/stdlib-js/stdlib/commit/2035f344a1a469278042b7532f034dc6119933b3) - **docs:** add function documentation _(by Athan Reines)_
-   [`168c7c1`](https://github.com/stdlib-js/stdlib/commit/168c7c18aa58007cf9d7785b9cde69e8e7157c21) - **revert:** docs: fix example code _(by Philipp Burckhardt)_
-   [`e4701e8`](https://github.com/stdlib-js/stdlib/commit/e4701e814ce9db206690ad9f2ce8b84e5a4f4e52) - **docs:** fix example code _(by Philipp Burckhardt)_
-   [`488f765`](https://github.com/stdlib-js/stdlib/commit/488f7650b91db3e3c9170442878643715efc560d) - **refactor:** reorder parameters _(by Athan Reines)_
-   [`ab75e22`](https://github.com/stdlib-js/stdlib/commit/ab75e229c58f150da20f42d7f2448e63d1939401) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`9476523`](https://github.com/stdlib-js/stdlib/commit/9476523b10a273a2a9cbd428ae98bf6e70e66480) - **feat:** add `stats/strided/dvarmpn` _(by Gururaj Gurram)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gururaj Gurram
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

