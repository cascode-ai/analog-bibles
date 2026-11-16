# Golden Solution - R717

## Reference answer

About 11.9 mV peak-to-peak at the gate, in phase with $V_{sub}$: a rise of the substrate voltage lowers $V_{TH1}$ and raises $I_{D1}$ just as a rise of $V_{in}$ would.

- The substrate acts as a back gate: $\Delta I_{D1} = g_{mb}V_{sub}$, equivalent to a gate voltage $v_{eq} = (g_{mb}/g_m)V_{sub} = \eta V_{sub}$.
- $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}}) = 0.45/(2\sqrt{0.9}) = 0.237$ ($V_{SB} = 0$ on average).
- $g_m = \sqrt{2 \times 134\ \mu \times 200 \times 1\ \mathrm{mA}} = 7.32$ mS, $g_{mb} = 1.74$ mS; drain-current disturbance $1.74\ \mathrm{mS} \times 50\ \mathrm{mV} = 87\ \mu$A pp; referred to the gate: $87\ \mu\mathrm{A}/7.32\ \mathrm{mS} = 11.9$ mV pp.
- The result does not depend on W/L or $I_D$ (they cancel in $g_{mb}/g_m$). The large-signal threshold change $\gamma(\sqrt{0.925} - \sqrt{0.875})$ for ±25 mV gives the same 11.9 mV.

## Grading notes

+2: ≈ 11.9 mV pp (±5%) via body effect, $\eta = g_{mb}/g_m$ = 0.237 at $V_{SB} = 0$ (or the equivalent large-signal $\Delta V_{TH}$). Stating the in-phase sign is a plus but not required. +1: the correct ≈ 11.9 mV pp magnitude but the polarity asserted as inverted (e.g., $V_{SB} = +V_{sub}$, or "a higher substrate voltage raises $V_{TH}$"); right mechanism and method with η evaluated at a slightly different, stated bias; or the answer given as the drain-current disturbance (≈ 87 μA pp) with the gate-referred value only implied. 0: body effect identified with an arithmetic slip in η. -2 (asserted as fact): the full 50 mV referred to the gate (η = 1), the effect claimed to be zero because the source is grounded, η taken as γ (22.5 mV pp) or another formula error for η, or a capacitive coupling mechanism with invented capacitances used instead of the body effect.
