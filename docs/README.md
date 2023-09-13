[![Publish and Deploy App](https://github.com/tiago-freire/global-style-vars/actions/workflows/publish-and-deploy.yml/badge.svg)](https://github.com/tiago-freire/global-style-vars/actions/workflows/publish-and-deploy.yml)

# Global Style Vars

Provides CSS variables bound to the selected style.

## Install

`vtex install ssesandbox04.global-style-vars@0.x`

After this, CSS global variables corresponding to current style settings will be available for theme CSS overrides.

| Available variables                    |
| -------------------------------------- |
| `--background-base`                    |
| `--background-base--inverted`          |
| `--background-action-primary`          |
| `--background-action-secondary`        |
| `--background-emphasis`                |
| `--background-disabled`                |
| `--background-success`                 |
| `--background-success--faded`          |
| `--background-danger`                  |
| `--background-danger--faded`           |
| `--background-warning`                 |
| `--background-warning--faded`          |
| `--background-muted-1`                 |
| `--background-muted-2`                 |
| `--background-muted-3`                 |
| `--background-muted-4`                 |
| `--background-muted-5`                 |
| `--hover-background-action-primary`    |
| `--hover-background-action-secondary`  |
| `--hover-background-emphasis`          |
| `--hover-background-success`           |
| `--hover-background-success--faded`    |
| `--hover-background-danger`            |
| `--hover-background-danger--faded`     |
| `--hover-background-warning`           |
| `--hover-background-warning--faded`    |
| `--hover-background-muted-1`           |
| `--hover-background-muted-2`           |
| `--hover-background-muted-3`           |
| `--hover-background-muted-4`           |
| `--hover-background-muted-5`           |
| `--active-background-action-primary`   |
| `--active-background-action-secondary` |
| `--active-background-emphasis`         |
| `--active-background-success`          |
| `--active-background-success--faded`   |
| `--active-background-danger`           |
| `--active-background-danger--faded`    |
| `--active-background-warning`          |
| `--active-background-warning--faded`   |
| `--active-background-muted-1`          |
| `--active-background-muted-2`          |
| `--active-background-muted-3`          |
| `--active-background-muted-4`          |
| `--active-background-muted-5`          |
| `--text-action-primary`                |
| `--text-action-secondary`              |
| `--text-link`                          |
| `--text-emphasis`                      |
| `--text-disabled`                      |
| `--text-success`                       |
| `--text-success--faded`                |
| `--text-danger`                        |
| `--text-danger--faded`                 |
| `--text-warning`                       |
| `--text-warning--faded`                |
| `--text-muted-1`                       |
| `--text-muted-2`                       |
| `--text-muted-3`                       |
| `--text-muted-4`                       |
| `--text-muted-5`                       |
| `--visited-text-link`                  |
| `--hover-text-action-primary`          |
| `--hover-text-action-secondary`        |
| `--hover-text-link`                    |
| `--hover-text-emphasis`                |
| `--hover-text-success`                 |
| `--hover-text-success--faded`          |
| `--hover-text-danger`                  |
| `--hover-text-danger--faded`           |
| `--hover-text-warning`                 |
| `--hover-text-warning--faded`          |
| `--active-text-link`                   |
| `--active-text-emphasis`               |
| `--active-text-success`                |
| `--active-text-success--faded`         |
| `--active-text-danger`                 |
| `--active-text-danger--faded`          |
| `--active-text-warning`                |
| `--active-text-warning--faded`         |
| `--border-action-primary`              |
| `--border-action-secondary`            |
| `--border-emphasis`                    |
| `--border-disabled`                    |
| `--border-success`                     |
| `--border-success--faded`              |
| `--border-danger`                      |
| `--border-danger--faded`               |
| `--border-warning`                     |
| `--border-warning--faded`              |
| `--border-muted-1`                     |
| `--border-muted-2`                     |
| `--border-muted-3`                     |
| `--border-muted-4`                     |
| `--border-muted-5`                     |
| `--hover-border-action-primary`        |
| `--hover-border-action-secondary`      |
| `--hover-border-emphasis`              |
| `--hover-border-success`               |
| `--hover-border-success--faded`        |
| `--hover-border-danger`                |
| `--hover-border-danger--faded`         |
| `--hover-border-warning`               |
| `--hover-border-warning--faded`        |
| `--hover-border-muted-1`               |
| `--hover-border-muted-2`               |
| `--hover-border-muted-3`               |
| `--hover-border-muted-4`               |
| `--hover-border-muted-5`               |
| `--active-border-action-primary`       |
| `--active-border-action-secondary`     |
| `--active-border-emphasis`             |
| `--active-border-success`              |
| `--active-border-success--faded`       |
| `--active-border-danger`               |
| `--active-border-danger--faded`        |
| `--active-border-warning`              |
| `--active-border-warning--faded`       |
| `--active-border-muted-1`              |
| `--active-border-muted-2`              |
| `--active-border-muted-3`              |
| `--active-border-muted-4`              |
| `--active-border-muted-5`              |
| `--on-base`                            |
| `--on-base--inverted`                  |
| `--on-action-primary`                  |
| `--on-action-secondary`                |
| `--on-emphasis`                        |
| `--on-disabled`                        |
| `--on-success`                         |
| `--on-success--faded`                  |
| `--on-danger`                          |
| `--on-danger--faded`                   |
| `--on-warning`                         |
| `--on-warning--faded`                  |
| `--on-muted-1`                         |
| `--on-muted-2`                         |
| `--on-muted-3`                         |
| `--on-muted-4`                         |
| `--on-muted-5`                         |
| `--hover-on-action-primary`            |
| `--hover-on-action-secondary`          |
| `--hover-on-emphasis`                  |
| `--hover-on-success`                   |
| `--hover-on-success--faded`            |
| `--hover-on-danger`                    |
| `--hover-on-danger--faded`             |
| `--hover-on-warning`                   |
| `--hover-on-warning--faded`            |
| `--active-on-action-primary`           |
| `--active-on-action-secondary`         |
| `--active-on-emphasis`                 |
| `--active-on-success`                  |
| `--active-on-success--faded`           |
| `--active-on-danger`                   |
| `--active-on-danger--faded`            |
| `--active-on-warning`                  |
| `--active-on-warning--faded`           |

## Contributors ✨

<table>
  <tbody>
    <tr>
      <td valign="top" align="center"><a href="https://github.com/tiago-freire"><img src="https://avatars.githubusercontent.com/u/921910?v=3?s=100" width="100px;" alt="Tiago Freire"/><br /><sub><b>Tiago Freire</b></sub></a></td>
    </tr>
  </tbody>
</table>
