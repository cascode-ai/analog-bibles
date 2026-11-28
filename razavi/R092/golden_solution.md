# Golden Solution - R092

## Reference answer

Let $k=R_S/(R_F+R_S)$ and $V_{TH}(v)=V_{TH0}+\gamma(\sqrt{2|\phi_F|+v}-\sqrt{2|\phi_F|})$.

- Cutoff: $V_{out}=kV_{in}$. The turn-on point solves $(1-k)V_{in,on}=V_{TH}(kV_{in,on})$ with $V_{out,on}=kV_{in,on}$. If $(1-k)V_{DD}\le V_{TH}(kV_{DD})$, the divider line spans the entire sweep.
- Upon conduction the drain stays at $V_{DD}$, so $M_1$ remains saturated. Solve

$$\frac{V_{in}-V_{out}}{R_F}+\frac{\beta}{2}[V_{in}-V_{out}-V_{TH}(V_{out})]^2=\frac{V_{out}}{R_S}.$$

The slope starts at $k$ and approaches $1/(1+\eta)$ when $g_m$ dominates both resistor conductances, where $\eta=dV_{TH}/dV_{out}$.

![R092 output transfer characteristic](/q/R092/solution-vout.svg)

## Grading notes

- +2 for divider line $V_{out} = V_{in}R_S/(R_S+R_F)$ below turn-on, turn-on at $V_{in} \approx V_{TH}(1 + R_S/R_F)$, saturated follower above it with slope rising toward ≈ $1/(1+\eta)$ < 1.
- +1 for one feature missing or the body effect ignored.
- 0 for $V_{out} = 0$ assumed below turn-on (ignoring $R_F$) with an otherwise correct follower region.
- −2 for asserting inverting characteristic, slope above 1, $M_1$ claimed to enter triode, or $R_F$ read as connected to $V_{DD}$ or ground.
