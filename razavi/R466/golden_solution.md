# Golden Solution - R466

## Reference answer

$\overline{V^2_{n,in}} = 8kT\gamma_n\dfrac{g_{m1} + g_{m3}}{g_{mb1}^2} = \dfrac{8kT\gamma_n(g_{m1}+g_{m3})}{\eta^2 g_{m1}^2}$, which is $1/\eta^2$ times the regular pair's $8kT\gamma_n(g_{m1}+g_{m3})/g_{m1}^2$: about 20 times larger in power (≈ 4.5× in rms voltage, ≈ 13 dB) for η ≈ 0.22 at $V_{BS} = 0$.

- Each half: drain noise currents of $M_1$ and $M_3$, $4kT\gamma_n(g_{m1} + g_{m3})$, appear at the output; the signal produces $g_{mb1}v_{in}$. Two halves → factor 2 (8kT).
- The noise current of $M_1$ is generated in its channel and is not reduced by driving the bulk, while the signal transconductance is only $g_{mb} = \eta g_m$ with η = 0.4/(2√(0.8 + V_BS)), where $V_{BS} = V_B - V_S$ for the PMOS (positive when the well is above the source, i.e. reverse bias). With the wells at $V_{DD}$ ($V_{BS} = 0$), η ≈ 0.22 and the input-referred noise rises by $1/\eta^2 \approx 20$. Biasing the wells slightly below $V_{DD}$ forward-biases the source–well junctions and raises η (≈ 0.28 at $V_{BS} = -0.3$ V, $1/\eta^2 \approx 12.5$); $V_{BS} > 0$ would need the wells above the supply and gives a smaller η (larger ratio).
- Regular PMOS pair with NMOS current-source loads (tail noise is common-mode): $8kT\gamma_n(1/g_{m1} + g_{m3}/g_{m1}^2)$. The $1/\eta^2$ ratio assumes the same device sizes (hence the same $g_{m1}$, $g_{m3}$ at the same currents); an answer that compares with different $g_m$'s and writes the general ratio correctly is also right.

## Grading notes

+2: $8kT\gamma(g_{m1}+g_{m3})/g_{mb1}^2$ (or $g_{mb}$ written as η$g_m$) and the comparison: larger by $1/\eta^2$ (≈ 20, or a stated range ≈ 10–30 depending on $V_{BS}$). The well bias is not given; assuming wells at $V_{DD}$ ($V_{BS} = 0$), stated as an assumption, is fine. +1: correct expression and qualitative conclusion (much noisier) without the 1/η² factor quantified; or the correct $V_{BS} = 0$ result and 1/η² comparison together with a PMOS body-bias sign error in an optional general η expression (e.g., defining $V_{SB} = V_{DD} - V_B$ and still writing √(0.8 + V_SB), or claiming that biasing the wells below $V_{DD}$ lowers η), which is a minor false claim. 0: correct comparison idea but a missing factor of 2 or a wrong load term. -2 (asserted as fact): bulk-driven pair claimed to be as quiet or quieter than the gate-driven pair, noise referred with $g_{m1}$ instead of $g_{mb1}$, or the ratio given as $1/\eta$ asserted as the power ratio.
