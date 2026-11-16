# Golden Solution - G330

## Reference answer

$\mathscr{R}(s) = a_v(s)\dfrac{R}{R + 1/sC} = a_v(s)\dfrac{sRC}{1 + sRC}$; the closed loop is stable for all $R, C > 0$.

Return ratio: with $V_i = 0$ and the controlled source replaced by $a_v(s)v_t$, the node voltage is $a_vv_t R/(R + 1/sC)$ and $v_x$ is its negative, so $\mathscr{R} = a_v(s)\,sRC/(1 + sRC)$.

Stability (Routh): write $a_v(s) = a_0/(1 + b_1s + b_2s^2)$ with $a_0 > 0$ and $b_1, b_2 > 0$ (two LHP poles, real or complex; the intended $a_v$ is this two-pole model with no finite zeros — with a right-half-plane zero the claim can fail, e.g. $a_v = 10(1 - s)/[(s+1)(s+2)]$ with $RC = 100$ gives two right-half-plane closed-loop poles). Poles of the closed loop are the roots of
$(1 + sRC)(1 + b_1s + b_2s^2) + a_0sRC = RCb_2\,s^3 + (b_2 + RCb_1)s^2 + (b_1 + RC + a_0RC)s + 1 = 0$.
All coefficients are positive, and the Routh condition for a cubic, $(b_2 + RCb_1)(b_1 + RC(1 + a_0)) > RCb_2 \times 1$, always holds because the left side contains the term $b_2RC(1 + a_0) > b_2RC$. Hence all roots are in the LHP for any $R$ and $C$.

Equivalent phase argument: the phase of $j\omega RC/(1 + j\omega RC)$ is $90° - \arctan\omega RC \in (0°, 90°]$ and the phase of $a_v(j\omega)$ lies in $(-180°, 0°]$ for finite $\omega$, so the phase of $\mathscr{R}(j\omega)$ never reaches −180°; the Nyquist plot never crosses the negative real axis and cannot encircle −1.

## Grading notes

+2: $\mathscr{R} = a_v(s)\,sRC/(1 + sRC)$ (sign handled correctly) and a valid general stability proof (Routh-Hurwitz on the cubic, or the phase/Nyquist argument covering both real and complex LHP poles). Taking $a_v$ as the two-pole model with no finite zeros, stated or implied, is the intended reading; pointing out that the claim can fail if $a_v$ has a right-half-plane zero is correct but not required. +1: correct $\mathscr{R}$ and a proof that assumes real poles only, or with a small gap. 0: correct $\mathscr{R}$ with an incomplete or numeric-only stability check. −2 (asserted as fact): $\mathscr{R}$ missing the $sRC/(1+sRC)$ factor (e.g. $\mathscr{R} = a_v$), a claim of instability for some $R$, $C$, or a proof relying on $a_v$ having a single pole.
