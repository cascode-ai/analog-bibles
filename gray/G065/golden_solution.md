# Golden Solution - G065

## Reference answer

$V_O \approx 1.32$ V, $v_o/v_i \approx 0.835$.

- $I_D = 200\ \mu\mathrm{A} + V_O/(10\ \mathrm{k\Omega})$. Solving with $V_{SB} = V_O$: $V_O = 1.324$ V, $I_D = 332\ \mu$A, $V_t = 0.816$ V, overdrive 0.86 V.
- $g_m = \sqrt{2k'(W/L)I_D} = 0.773$ mA/V, $\chi = 0.19/(2\sqrt{0.61 + 1.324}) = 0.068$, $g_{mb} = 0.053$ mA/V.
- $v_o/v_i = \dfrac{g_m R}{1 + (g_m + g_{mb})R} = \dfrac{7.73}{1 + 8.26} = 0.835$. The small load resistance now dominates the loss of gain.

## Grading notes

+2: $V_O$ = 1.29–1.35 V and gain 0.82–0.85 with body effect and $R$ included. +1: one value with a small slip, or bias computed with 200 µA only ($V_O \approx 1.50$ V) but a correct gain formula with the resulting slightly different value. 0: gain formula right but body effect omitted (≈ 0.88 with the correct bias), or only one quantity right. −2 (asserted as fact): gain $> 1$ or negative, $R$ placed in series with the source, or $V_O$ above the value of part (a) (1.63 V).
