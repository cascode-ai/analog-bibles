# Golden Solution - R535

## Reference answer

$I_{out} = \dfrac{2}{R_S^2}\left(\dfrac{1}{\sqrt{\beta_1}} - \dfrac{1}{\sqrt{\beta_2}}\right)^2 = \dfrac{2}{\mu_nC_{ox}(W/L)_1R_S^2}\left(1 - \dfrac{1}{\sqrt{K}}\right)^2$ with $K = (W/L)_2/(W/L)_1$; a nonzero solution requires $\beta_2 > \beta_1$ ($M_2$ with the larger $W/L$; wider if the channel lengths are equal). The result is independent of $V_{DD}$, and there is no body-effect error because both NMOS sources are grounded.

Derivation:
- $M_3 = M_4$, so the current $I_{REF}$ of $M_4$ equals $I_{out}$.
- $R_S$ is connected between the gate of $M_1$ (drain of $M_4$) and the drain of $M_1$, which also drives the gate of $M_2$. The gates draw no current, so $I_{out}$ flows through $R_S$ into $M_1$: $V_{GS1} = V_{GS2} + I_{out}R_S$.
- Square law, same $V_{TH}$ (both sources at ground): $V_{TH} + \sqrt{2I_{out}/\beta_1} = V_{TH} + \sqrt{2I_{out}/\beta_2} + I_{out}R_S$, so $\sqrt{2I_{out}}\,(1/\sqrt{\beta_1} - 1/\sqrt{\beta_2}) = I_{out}R_S$, which gives the result.
- Side conditions: $M_1$ has $V_{DS1} = V_{GS2}$ and stays saturated if $I_{out}R_S \le V_{TH}$. The loop also admits $I_{out} = 0$, so a start-up circuit is still needed.

## Grading notes

+2: correct loop relation $V_{GS1} = V_{GS2} + I_{out}R_S$ with $I_{REF} = I_{out}$, and the result in any equivalent form, with $\beta_2 > \beta_1$ stated or implied. Remarks on the absence of body effect, start-up or the saturation of $M_1$ are a plus. +1: correct relation and form with a minor slip (e.g., a misplaced factor of 2 in one step). 0: correct loop equation set up but not solved, or solved with an algebra error that changes the result. -2 (asserted as fact): reversed relation $V_{GS2} = V_{GS1} + I_{out}R_S$ (so that $M_1$ must be the wider device), a result that depends on $V_{DD}$, or $R_S$ read as a source resistor carrying a different current.
