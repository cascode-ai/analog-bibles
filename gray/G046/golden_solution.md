# Golden Solution - G046

## Reference answer

In parallel, both devices have the same $V_{GS}$, $V_{DS}$ and $V_{SB}$. Every parameter except $W$ is identical (same $L$, so also the same $V_t$, body effect and $\lambda$), and in every region the drain current is proportional to $W$: $I_{Dk} = W_k\,f(V_{GS},V_{DS},V_{SB})$ with, e.g.,
- cutoff: $f = 0$;
- triode: $f = \dfrac{k'}{L}\left[(V_{GS}-V_t)V_{DS} - \dfrac{V_{DS}^2}{2}\right]$;
- saturation: $f = \dfrac{k'}{2L}(V_{GS}-V_t)^2(1+\lambda V_{DS})$.

Hence $I_D = I_{D1} + I_{D2} = (W_1 + W_2)f(V_{GS},V_{DS},V_{SB})$, which is exactly the current of one transistor of width $W_1 + W_2$ and length $L$ under the same terminal voltages, for any bias. Both devices also change region at the same voltages ($V_{DS} = V_{GS} - V_t$ does not depend on $W$). The same holds for the small-signal parameters ($g_m$, $g_{mb}$, $1/r_o$ add) and to first order for the capacitances (gate area $(W_1+W_2)L$, overlap ∝ W). (Edge effects of narrow devices are neglected.)

## Grading notes

+2: argument that the terminal voltages are shared, current ∝ $W$ in all operating regions (at least triode and saturation shown) with identical $V_t$ and λ, so the currents add to that of a $(W_1+W_2)/L$ device. +1: shown for saturation only (or triode only) with a remark that the other region works the same way, or a correct argument by summing $W/L$ without stating the shared voltages explicitly. 0: an assertion without derivation. −2 (asserted as fact): claiming the equivalent length changes, that the equivalence fails in triode, or summing $1/W$.
