# Golden Solution - G083

## Reference answer

$(W/L)_6 = (W/L)/5$, $(W/L)_7 = (W/L)/3$. Double-cascode mirror: $R_o \approx r_o(1 + g_mr_o)^2 \approx g_m^2r_o^3$; $V_{OUT(\min)} = 3V_{ov}$; input-branch voltage $2V_t + 4V_{ov}$; systematic gain error ≈ 0.

Sizing:
- $I = \tfrac{k'}{2}(W/L)V_{ov}^2$ (from $M_8$). With $V_{DS6} = V_{DS7} = V_{ov}$ and $V_{GS8} = V_t + V_{ov}$, the common gate is at $V_t + 3V_{ov}$.
- $M_7$: $V_{GS7} = V_t + 2V_{ov}$, $V_{DS7} = V_{ov} < 2V_{ov}$ → triode: $I = k'(W/L)_7[2V_{ov}^2 - V_{ov}^2/2] = 1.5k'(W/L)_7V_{ov}^2$ → $(W/L)_7 = (W/L)/3$.
- $M_6$: $V_{GS6} = V_t + 3V_{ov}$, $V_{DS6} = V_{ov}$ → triode: $I = k'(W/L)_6[3V_{ov}^2 - V_{ov}^2/2] = 2.5k'(W/L)_6V_{ov}^2$ → $(W/L)_6 = (W/L)/5$.

Mirror (one valid arrangement): output branch $M_1$ (bottom), $M_2$, $M_3$, all of size $W/L$, gates at $V_t + V_{ov}$, $V_t + 2V_{ov}$, $V_t + 3V_{ov}$, so $V_{DS1} = V_{DS2} = V_{ov}$. Input branch carrying $I_{IN}$, from ground up: $M_A$, $M_B$, $M_C$ (replicas of $M_1$–$M_3$, gates tied to the corresponding output gates), then the $M_6$–$M_8$ stack with the source of $M_6$ at the drain of $M_C$. The drain of $M_C$ (= source of $M_6$, at $V_t + V_{ov}$) drives the gates of $M_A$ and $M_1$; the drain of $M_6$ ($V_t + 2V_{ov}$) drives the gates of $M_B$ and $M_2$; the drain of $M_7$ ($V_t + 3V_{ov}$) drives the gates of $M_C$ and $M_3$; $I_{IN}$ enters the drain of $M_8$, which is tied to the gates of $M_6$–$M_8$ (at $2V_t + 4V_{ov}$).
- Output resistance: $R_{o2} = r_{o2}(1 + g_{m2}r_{o1}) + r_{o1}$, $R_o = r_{o3}(1 + g_{m3}R_{o2}) + R_{o2} \approx r_o(1+g_mr_o)^2 \approx g_m^2r_o^3$.
- Minimum output voltage: $V_{DS1} + V_{DS2} + V_{ov3} = 3V_{ov}$.
- Input voltage: $(V_t + V_{ov})$ to the source of $M_6$ plus $V_{ov} + V_{ov} + (V_t + V_{ov})$ across the stack $= 2V_t + 4V_{ov}$.
- Feasibility: $M_C$ has its drain at $V_t + V_{ov}$ and its source at $2V_{ov}$, so $V_{DS,C} = V_t - V_{ov}$; it stays in the active region only if $V_t \ge 2V_{ov}$.
- Systematic gain error: $M_A$ and $M_1$ have equal $V_{GS}$ and $V_{DS}$ ($= V_{ov}$), and the only difference ($V_{DS}$ of $M_C$ vs $M_3$) is attenuated by two cascode stages, so $\epsilon \approx 0$.
- (If instead a single diode-connected $M_A$ is placed under the stack, the same gate voltages result and $R_o$, $V_{OUT(\min)}$ and the input voltage are unchanged, but $V_{DS,A} = V_t + V_{ov}$ while $V_{DS1} = V_{ov}$, so $\epsilon \approx -\lambda V_t$, a few percent.)

## Grading notes

+2: $(W/L)_6 = (W/L)/5$ and $(W/L)_7 = (W/L)/3$ from triode equations; a valid schematic in which the stack supplies $V_t + 2V_{ov}$ and $V_t + 3V_{ov}$ to the two cascode gates (and $V_t + V_{ov}$ to the mirror device); $R_o \approx g_m^2r_o^3$ (or $r_o(1+g_mr_o)^2$); $V_{OUT(\min)} = 3V_{ov}$; input-branch voltage $2V_t + 4V_{ov}$; gain error ≈ 0 for a replica input branch (or ≈ $-\lambda V_t$ correctly derived for a diode-only input branch). Any other valid arrangement with self-consistent results is accepted. +1: sizes and schematic right with one of the four results missing or slightly off. 0: sizes right but the mirror largely missing or wrong, or a valid mirror with wrong sizes from a slip. -2 (asserted as fact): $M_6$/$M_7$ treated as saturated (e.g. $(W/L)/9$ and $(W/L)/4$), sizes interchanged, a double-cascode output resistance of only $g_mr_o^2$, or a minimum output voltage containing threshold terms (e.g. $2V_t + 3V_{ov}$) claimed for this high-swing design.
