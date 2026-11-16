# Golden Solution - A318

## Reference answer

The follower roots lie at a few tenths of a Grad/s, i.e., only about 4–7 times GB (GB = 31.4 Mrad/s, 10GB = 314 Mrad/s): solved together they form a complex pole pair at ≈ (−67 ± j97) Mrad/s (|p| ≈ 118 Mrad/s ≈ 19 MHz, ζ ≈ 0.57); estimated separately, the MOS-follower pole is ≈ −0.22 Grad/s and the BJT-follower pole ≈ −0.19 to −0.21 Grad/s. Their zeros are far away (≈ −3.9 Grad/s and ≈ −17 Grad/s). Since the poles are below 10GB they add roughly 16–18° of phase lag at GB and degrade the phase margin.

Small-signal values: $g_{m9} = \sqrt{2(50\ \mu)(10)(100\ \mu)} = 316\ \mu$S; $V_{BS9} \approx 2.5 - V_{BE} \approx 1.84$ V, $g_{mbs9} = g_{m9}\gamma/(2\sqrt{0.8 + 1.84}) \approx 55\ \mu$S; $g_{ds8} = g_{ds9} = 5\ \mu$S; $g_{m10} = 1\ \mathrm{mA}/25.9\ \mathrm{mV} = 38.6$ mS, $g_\pi = 0.386$ mS, $g_{ds11} = 40\ \mu$S, $G_L = 2$ mS.
Capacitances: node B (M9 source/Q10 base): $C_\mu = 1$ pF, $C_{bd8} \approx 0.27$ pF, $C_{gd8} \approx 0.03$ pF, $C_{sb9} \approx 0.02$ pF ($C_{gs9} \approx 0.019$ pF to the input); output: $C_L = 100$ pF, $C_{bd11} \approx 3.4$ pF, $C_{gd11} \approx 0.32$ pF; $C_\pi$ = 10 pF bridges B and the output.
- MOS follower (separately): $p \approx -\dfrac{g_{m9} + g_{mbs9} + g_{ds8} + g_{ds9} + g_\pi(1-A_{BJT})}{C_\mu + C_{bd8} + C_{gd8} + C_{sb9} + C_\pi(1-A_{BJT})} \approx -\dfrac{400\ \mu\mathrm{S}}{1.82\ \mathrm{pF}} \approx -220$ Mrad/s ($A_{BJT} \approx 0.95$); zero $-g_{m9}/C_{gs9} \approx -1.7\times10^{10}$ rad/s.
- BJT follower (separately): $R_{o} = [r_\pi + 1/(g_{m9}+g_{mbs9}+\dots)]/(1+\beta_F) \approx (2.59 + 2.62)\ \mathrm{k}/101 \approx 52\ \Omega$; with $R_L\|r_{ds11}$, 47 Ω; $p \approx -1/(47\ \Omega\times104\ \mathrm{pF}) \approx -0.21$ Grad/s (−0.19 Grad/s with $C_\pi$ added); zero $-(g_{m10}+g_\pi)/C_\pi \approx -3.9$ Grad/s.
- The two nodes are strongly coupled through $C_\pi$; the two-node determinant gives the complex pair above.
- Comparison: GB = 2π(5 MHz) = 31.4 Mrad/s. The roots are not above 10GB = 314 Mrad/s; phase lag at GB ≈ 16–18°, so a design that ignores the followers would lose that much phase margin (e.g., 60° → ≈ 42°).

## Grading notes

+2: pole estimates for both followers with magnitudes within roughly 0.1–0.4 Grad/s (or the coupled complex pair near |p| ≈ 0.1–0.13 Grad/s), zeros identified as far above GB (or stated negligible), and the conclusion that the roots are below 10GB and degrade the phase margin by roughly 10–20°. Any reasonable capacitance bookkeeping is acceptable. +1: correct conclusion with one pole estimate off by more than 2× through a modeling slip (e.g., the full 10 pF $C_\pi$ added to node B as a capacitance to ground, ignoring its bootstrapping by the emitter follower, which puts the MOS-follower pole near GB; simply omitting $C_\pi$ from node B moves that pole only to ≈ 0.3 Grad/s and is within the +2 range). 0: poles computed but compared wrongly, or the comparison right but the BJT pole modeled as $1/(R_LC_L)$ ≈ 20 Mrad/s (emitter-follower $g_m$ ignored). −2 (asserted as fact): roots claimed far above 10GB with no effect on stability, or poles placed in the right half-plane.
