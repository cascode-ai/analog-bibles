# Golden Solution - G058

## Reference answer

$R_o = (\beta_0+1)(r_o + r_e) = (\beta_0+1) r_o + r_\pi \approx \beta_0 r_o$.

Derivation: an ideal current-source drive has infinite source resistance, so the emitter node is connected only to $r_e$ (to ground) and $r_o$ (to the collector). Apply $v_x$ at the collector:
- KCL at the emitter: $(v_x - v_e)/r_o = v_e/r_e$, so $v_e = v_x r_e/(r_o + r_e)$.
- Current into the collector: $i_x = (v_x - v_e)/r_o - g_m v_e = v_e (1/r_e - g_m) = v_e/r_\pi$ (since $1/r_e = g_m + 1/r_\pi$).
- $R_o = v_x/i_x = r_\pi (r_o + r_e)/r_e = (\beta_0 + 1)(r_o + r_e)$.

Physically the emitter current cannot change, so a collector-voltage change can only change the base current: the output resistance is raised to about $\beta_0 r_o$ (the maximum attainable with emitter degeneration). For example, at $I_C = 250\ \mu$A with $\beta_0 = 200$ and $V_A = 130$ V this is about 105 MΩ.

## Grading notes

+2: $R_o = (\beta_0+1)(r_o + r_e)$ or an equivalent exact form, or the approximation $(\beta_0+1) r_o \approx \beta_0 r_o$ with a correct derivation. +1: correct result with a sign slip in an intermediate step, or only "$\approx \beta_0 r_o$" stated with a sketchy but valid argument. 0: correct setup (emitter node floating except for $r_e$) but algebra not completed. −2 (asserted as fact): $R_o = r_o$, $R_o = \infty$, $R_o = r_o(1 + g_m r_e) \approx 2r_o$, or $R_o = g_m r_o \cdot r_e$-type results from mis-wiring the model.
