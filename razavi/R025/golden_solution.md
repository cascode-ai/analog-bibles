# Golden Solution - R025

## Reference answer

At the stated initial condition, $V_X=V_{DD}=3\,\mathrm{V}$, so $V_{DS}=0$. The cutoff current is zero; if a channel forms, the triode law $I_D=\beta[(V_{GS}-V_{TH})V_{DS}-V_{DS}^2/2]$ is also zero. Therefore $V_X(t)=3\,\mathrm{V}$ and $I_X(t)=0\,\mathrm{A}$.

![Answer plot: voltage](/q/R025/solution-voltage.svg)

![Answer plot: current](/q/R025/solution-current.svg)

## Grading notes

+2: $V_X=3\,\mathrm{V}$ and $I_X=0\,\mathrm{A}$ justified by $V_{DS}=0$, with cutoff/triode distinction. +1: correct result with incomplete reasoning. -2: asserts charging or discharging through M1 despite $V_{DS}=0$.

