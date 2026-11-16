# Golden Solution - R612

## Reference answer

Third harmonic at the output: $|c| \approx \dfrac{|\alpha_3|V_m^3}{4(1+\beta\alpha_1)^4}$; relative to the fundamental $a \approx \alpha_1V_m/(1+\beta\alpha_1)$: $\dfrac{|c|}{a} \approx \dfrac{|\alpha_3|V_m^2}{4\alpha_1}\cdot\dfrac{1}{(1+\beta\alpha_1)^3}$, i.e., $(1+\beta\alpha_1)^3$ below the open-loop value for the same input amplitude.
- Assume $y \approx a\cos\omega t + c\cos3\omega t$. Then $y_S = (V_m - \beta a)\cos\omega t - \beta c\cos3\omega t$.
- $y = \alpha_1y_S + \alpha_3y_S^3$; with $\cos^3\omega t = (3\cos\omega t + \cos3\omega t)/4$, the $\cos3\omega t$ coefficient is $-\alpha_1\beta c + \tfrac14\alpha_3(V_m-\beta a)^3$ (cross terms with the small $c$ neglected). Setting it equal to $c$: $c(1+\alpha_1\beta) = \tfrac14\alpha_3(V_m-\beta a)^3$.
- With $a \approx \alpha_1V_m/(1+\beta\alpha_1)$, $V_m - \beta a = V_m/(1+\beta\alpha_1)$, so $c = \dfrac{\alpha_3V_m^3}{4(1+\beta\alpha_1)^4}$. (A numerical solution of the loop equation confirms it.)
- Compared at the same output amplitude, the relative third harmonic drops by $1+\beta\alpha_1$.

## Grading notes

+2: $|c| \approx |\alpha_3|V_m^3/[4(1+\beta\alpha_1)^4]$ or, equivalently stated, HD3 $\approx |\alpha_3|V_m^2/[4\alpha_1(1+\beta\alpha_1)^3]$, derived from the self-consistent harmonic balance (or the equivalent argument that the amplifier sees $V_m/(1+\beta\alpha_1)$ and the generated harmonic is suppressed by $1+\beta\alpha_1$). +1: correct result with the derivation only sketched, or only the relative form given without the absolute amplitude. 0: right method with the power of $(1+\beta\alpha_1)$ off by one through a slip. -2 (asserted as fact): third harmonic unchanged by feedback ($c = \alpha_3V_m^3/4$), an absolute amplitude suppressed only by $(1+\beta\alpha_1)$ or $(1+\beta\alpha_1)^3$ through a wrong argument (e.g., the feedback not acting on the generated harmonic), or a second harmonic claimed.
