# Golden Solution - R385

## Reference answer

Thermal:
$$\overline{V_{n,in}^2} = 2\left[\frac{4kT\gamma}{g_{m1}} + 4kT\gamma g_{m5}\left(\frac{1}{g_{m1}} + \frac{R_S}{2}\right)^2 + 4kT\gamma g_{m7}\frac{R_S^2}{4}\right] + 4kTR_S$$
Flicker:
$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{2}{C_{ox}f}\left[\frac{K_N}{(WL)_1} + g_{m5}^2\left(\frac{1}{g_{m1}} + \frac{R_S}{2}\right)^2\frac{K_P}{(WL)_5} + g_{m7}^2\frac{R_S^2}{4}\cdot\frac{K_N}{(WL)_7}\right]$$
$M_3$, $M_4$ contribute nothing (their noise is absorbed by the local loops).

- Upper source noise $I_{n5}$ flows entirely through $M_1$ (its drain node has no other path): $V_{S1} = V_{G1} + (I_{n1} - I_{n5})/g_{m1}$, and it also enters the KCL at the source node: $I_{D3} = I_{n7} - I_{n5} + (V_{S1} - V_{S2})/R_S + I_{n,RS}$ (+ dc).
- Hence $I_{D3} - I_{D4} = \dfrac{2}{R_S}\left[V_{in} + \dfrac{I_{n1} - I_{n2}}{g_{m1}}\right] - (I_{n5} - I_{n6})\left(1 + \dfrac{2}{g_{m1}R_S}\right) + (I_{n7} - I_{n8}) + 2I_{n,RS}$.
- Dividing by $2/R_S$: $I_{n5}$ refers as $(1/g_{m1} + R_S/2)I_{n5}$, $I_{n7}$ as $(R_S/2)I_{n7}$, $R_S$ as $R_SI_{n,RS}$, $M_1$ as $I_{n1}/g_{m1}$.
- The current-source transistors should have small $g_m$ (large overdrive); the upper sources are the more harmful (their noise also modulates $V_{GS1}$).

## Grading notes

+2: all contributions equivalent to the reference (thermal and flicker), including the upper-source weight $(1/g_{m1} + R_S/2)$ and the lower-source weight $R_S/2$, with $M_3$/$M_4$ excluded. The $R_S$ term must be $4kTR_S$: using the given current PSD $4kT/R_S$ as a series voltage (so that $4kT/R_S$ appears in the voltage PSD) is a unit slip in one term, cap at +1. +1: one of the two current-source weights slightly off (e.g., upper weight $R_S/2$ only), or the $R_S$ term slip above, rest right. 0: only the $M_1$/$M_2$ and $R_S$ terms (the result with ideal current sources: $8kT\gamma/g_{m1} + 4kTR_S$ and $2K_N/(C_{ox}(WL)_1f)$) plus a qualitatively correct but unquantified statement about the current-source noise. -2 (asserted as fact): current-source noise said to be rejected by the loop, $M_3$/$M_4$ noise included as dominant, or the transconductance taken as something other than $2/R_S$.
