# Golden Solution - G132

## Reference answer

$R_L = 10\ \mathrm{k\Omega}$: $V_o^+ \approx +13.75$ V, $V_o^- = -14.1$ V. $R_L = 2\ \mathrm{k\Omega}$: $V_o^+ \approx +11.9$ V, $V_o^- = -14.1$ V.
- Negative limit: $Q_3$ saturates, $V_1 = -V_{CC} + V_{CE3(\text{sat})} = -14.8$ V, and $Q_2$ (emitter follower) gives $V_o^- = V_1 + |V_{BE2}| = -14.1$ V, independent of $R_L$ ($Q_2$ is not saturated: $|V_{CE2}| = 0.9$ V).
- Positive limit: $Q_3$ cuts off and $Q_1$'s base is fed only through $R_1$: $V_{CC} = I_{b1}R_1 + V_{BE1} + V_o^+$ with $I_{b1} = V_o^+/(\beta_FR_L)$, so $V_o^+ = (V_{CC} - V_{BE1})/(1 + R_1/(\beta_FR_L))$.
- 10 kΩ: $14.3/(1 + 20/500) = 13.75$ V. 2 kΩ: $14.3/(1 + 20/100) = 11.92$ V. (Using $\beta_F + 1$: 13.76 V and 11.96 V.)

## Grading notes

+2: all four limits within ±0.1 V (13.75/13.76, 11.92/11.96, −14.1, −14.1) with the drive-limited positive swing through $R_1$. +1: positive limits right, negative limit given as −14.8 V, −14.3 V or −14.6 V (e.g. $Q_2$ treated as saturated) by a $V_{BE}$/saturation slip. 0: negative limit right but positive limit taken as $V_{CC} - V_{CE(\text{sat})}$ or $V_{CC} - V_{BE}$ for both loads (no $R_1$ drive limit). −2 (asserted as fact): positive limit independent of $R_L$ asserted as fact with $Q_1$ saturating, limits outside the supplies, or the roles of $Q_1$ and $Q_2$ swapped.
