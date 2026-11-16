# Golden Solution - R609

## Reference answer

$\overline{V_{n,in}^2} = 2\,\overline{V_n^2}\left(\dfrac{V_{GS}-V_{TH}-V_b}{V_b}\right)^2$, i.e., $V_{n,in} = \sqrt2\,V_n\,\dfrac{V_{GS}-V_{TH}-V_b}{V_b}$, where $V_{GS}-V_{TH}$ is the overdrive of $M_1$/$M_2$ at the input common-mode level and $V_b = V_{DS1,2}$. Equivalently $2\overline{V_n^2}(g_{ds}/g_m)^2$ with $g_m = \mu_nC_{ox}\tfrac WL V_b$ and $g_{ds} = \mu_nC_{ox}\tfrac WL(V_{GS}-V_{TH}-V_b) = 1/R_{on}$.
- The loop forces $V_X = V_b + V_{n1}$, so the noise of $A_1$ modulates the drain–source voltage of $M_1$.
- $I_{D1} = \mu_nC_{ox}\tfrac WL[(V_{GS1}-V_{TH})V_X - V_X^2/2]$: $\partial I_{D1}/\partial V_X = \mu_nC_{ox}\tfrac WL(V_{GS1}-V_{TH}-V_b)$, $\partial I_{D1}/\partial V_{GS1} = \mu_nC_{ox}\tfrac WL V_b$.
- Current noise $\mu_nC_{ox}\tfrac WL(V_{GS}-V_{TH}-V_b)V_{n1}$ divided by the transconductance gives $V_{n1}(V_{GS}-V_{TH}-V_b)/V_b$ per side; the two uncorrelated sides add in power for the differential input.
- Since triode operation requires $V_{GS}-V_{TH} > V_b$ and usually $V_{GS}-V_{TH} \gg V_b$, the auxiliary amplifiers' noise is amplified (e.g., $V_{ov}$ = 1 V, $V_b$ = 0.2 V gives $V_{n,in} \approx 5.7V_n$), one of the drawbacks of this linearization scheme.

## Grading notes

+2: $V_{n,in} = \sqrt2\,V_n(V_{GS}-V_{TH}-V_b)/V_b$ (or the equivalent $\sqrt2V_n\,g_{ds}/g_m$, or the mean-square form), with the noise entering as a fluctuation of $V_X$, $V_Y$. +1: deep-triode approximation $(V_{GS}-V_{TH})/V_b$ used without saying it is approximate, or the √2 for two amplifiers omitted, otherwise correct. 0: correct mechanism with a slip in the derivative, or only one side analysed and not combined. -2 (asserted as fact): the amplifiers' noise appearing directly at the input ($V_{n,in} = V_n$ or $\sqrt2V_n$), claimed to be negligible or fully rejected, or computed with saturation-region $g_m$.
