# Golden Solution - R330

## Reference answer

With $n$ equal segments the total drain noise current is $\overline{I_n^2} = 4kT R_G\,g_m^2\,\dfrac{(n+1)(2n+1)}{6n^2} \to 4kT\dfrac{R_G}{3}g_m^2$ for $n \to \infty$, which is exactly the drain noise of a single lumped resistor $R_G/3$ in series with the gate.

- Each unit transistor has transconductance $g_m/n$; each segment $R_{Gj} = R_G/n$ has a series noise voltage $V_j$ with $\overline{V_j^2} = 4kTR_G/n$.
- No gate current flows, so $V_j$ shifts the gate voltage of every unit transistor downstream of segment $j$ (transistors $j, j+1, \dots, n$) by the same $V_j$. Their drain currents are fully correlated and add as currents: $I_{D}|_{V_j} = (n - j + 1)\dfrac{g_m}{n}V_j$.
- Different segments are uncorrelated, so their powers add: $\overline{I_n^2} = \sum_{j=1}^{n}\left(\dfrac{g_m}{n}\right)^2 (n-j+1)^2\dfrac{4kTR_G}{n} = \dfrac{4kTR_Gg_m^2}{n^3}\sum_{k=1}^{n}k^2 = 4kTR_Gg_m^2\dfrac{n(n+1)(2n+1)}{6n^3}$.
- As $n \to \infty$ the factor tends to 1/3 (continuous form: $\int_0^1(1-x)^2dx = 1/3$). A lumped $R_{eq}$ in series with the gate gives $4kTR_{eq}g_m^2$, so $R_{eq} = R_G/3$.

## Grading notes

+2: recognizes that a segment's noise voltage drives all downstream unit transistors coherently (currents add as amplitudes), adds the different segments as powers, and evaluates the sum $\sum k^2/n^3 \to 1/3$ (or the equivalent integral) to get $R_G/3$. +1: correct structure and result with a minor index slip or an unjustified step (e.g., the integral written down without explaining why the weight is $(1-x)^2$). 0: the right physical picture but the sum not carried out, or the result reached only by quoting it. -2 (asserted as fact): powers of the downstream transistors added as if uncorrelated, a different factor such as $R_G/2$ claimed, or the channel noise used instead of the gate-resistance noise.
