# Golden Solution - G177

## Reference answer

About $2.6\times10^6$ (input stage ≈ 190, second stage ≈ 265, output stage ≈ 52). For comparison, $\beta_{npn} = 40$, $\beta_{pnp} = 10$ gives ≈ $1.3\times10^5$, so the higher betas raise the gain about 20-fold.

Input stage (pnp pair $Q_3$–$Q_4$, folded into common-base $Q_9$/$Q_{10}$, loads $Q_{13}$/$Q_{14}$):
- $R_{up1} = r_{o13}\dfrac{1+g_{m13}R_{13}(\beta_p+1)/\beta_p}{1+g_{m13}R_{13}/\beta_p}$ with $r_{o13} = 3.33$ MΩ, $g_{m13}R_{13} = 7.6$: 21.7 MΩ.
- $R_{down1} = r_{o9}\dfrac{1+g_{m9}R_9}{1+g_{m9}R_9/\beta_n}$ with $r_{o9} = 5$ MΩ, $g_{m9}R_9 = 5.08$: 28.6 MΩ. So $R_{o1} = 12.3$ MΩ.
- $\rho = \alpha_9R_9/(R_9 + \tfrac{80}{81}\tfrac{26\,\mathrm{mV}}{6\,\mu\mathrm{A}}) = 0.988\times0.837 = 0.827$ (the share entering $Q_9$'s emitter times $\alpha_9$), and $G_{m1} = (3\ \mu\mathrm{A}/26\ \mathrm{mV})\rho = 95.4\ \mu$A/V.
- Second-stage differential input resistance: $R_{i2} = 2[\beta_p/g_{m21} + \tfrac{\beta_p+1}{2}\beta_n/g_{m25}] = 2[130\ \mathrm{k} + 10.5\times208\ \mathrm{k}] = 4.6$ MΩ.
- $a_{v1} = G_{m1}(R_{o1}\parallel R_{i2}/2) = 95.4\ \mu\mathrm{A/V}\times(12.3\ \mathrm{M}\parallel2.31\ \mathrm{M}) \approx 186$.

Second stage (emitter followers $Q_{21}$/$Q_{22}$ into the split pair $Q_{25}$–$Q_{28}$; loads $Q_{17}$/$Q_{18}$):
- $R_{up2} = r_{o17}\dfrac{1+g_{m17}R_{17}(21/20)}{1+g_{m17}R_{17}/20}$ with $r_{o17} = 0.95$ MΩ, $g_{m17}R_{17} = 7.5$: 6.15 MΩ.
- $R_{E25} \approx \tfrac{80}{81}\tfrac{1}{g_{m26}}\parallel\tfrac{1}{g_{m27}}\parallel\tfrac{1}{g_{m28}} = 0.86$ kΩ, so $R_{down2} = r_{o25}(1+g_{m25}R_{E25}) = 3\ \mathrm{M}\times1.33 = 4.0$ MΩ, and $R_{o2} = 2.42$ MΩ.
- Emitter-follower gain $a_{v21} = 1/[1 + r_{\pi21}/((\beta_p+1)(r_{\pi25}/2\parallel r_{o21}))] = 0.94$.
- $G_{m2} = a_{v21}\left[\dfrac{g_{m25}}{1+g_{m25}R_{E25}} - \dfrac{g_{m26}}{3(1+g_{m26}R_{E26})}\right] \approx 0.94\times(289 - 96) \approx 181\ \mu$A/V.
- The bias loop holds $I_{C75}$ constant, so $Q_{40}$ supplies node 26's signal current and $Q_{39}$ adds an equal current at node 25. This doubles the effective transconductance into node 25.
- $Q_{39}$'s collector does not load node 25 appreciably: its base and the tail current are fixed and $Q_{40}$'s current is set by the loop, so $Q_{39}$'s emitter current is fixed and its collector resistance is about $(\beta_n+1)r_{o39} \approx 81\times3.3\ \mathrm{M\Omega} \approx 0.27$ GΩ. (Treating $Q_{39}$ instead as a degenerated current source with its emitter through $R_{39}$, $R_{40}$ and $1/g_{m40}$ to a fixed $Q_{40}$ base, $R_{o39} \approx 11$–$12$ MΩ, lowers $a_{v2}$ to ≈ 250 and the total to ≈ $2.4\times10^6$, within the accepted range.)

Output stage, dc revisions:
- $I_{C62} \approx 6 - 39/80 = 5.5\ \mu$A, so $I_{C63} \approx 28.6\ \mu$A.
- $|I_{C65}| = \tfrac{20}{21}(100 + 1200/20) = 152\ \mu$A.
- $I_{C64} = \tfrac{80}{81}(28.6 - 152/20) \approx 21\ \mu$A.
- $I_{C68} = \tfrac{80}{81}(6 + 210/80) \approx 8.5\ \mu$A.

Output stage, small signal:
- $R_{E65} = R_{65}\parallel\beta_pV_T/|I_{C66}|\parallel\beta_pV_T/|I_{C74}| = 7.5\ \mathrm{k}\parallel13.9\ \mathrm{k}\parallel433 = 0.40$ kΩ.
- $R_{E64} = [r_{o63}(1+g_{m63}R_{63})]\parallel[r_{\pi65} + 21R_{E65}] \approx 2.4\ \mathrm{M}\parallel11.8\ \mathrm{k} = 11.7$ kΩ.
- $R_{i3(25)} = r_{\pi64} + 81R_{E64} \approx 100\ \mathrm{k} + 949\ \mathrm{k} = 1.05$ MΩ.
- $a_{v2} = 2G_{m2}(R_{o2}\parallel R_{i3(25)}) = 2\times181\ \mu\mathrm{A/V}\times0.73\ \mathrm{M\Omega} \approx 265$.
- Follower gains: $a_{v64} = 1/[1 + r_{\pi64}/(81R_{E64})] = 0.90$ and $a_{v65} = 1/[1 + r_{\pi65}/(21R_{E65})] = 0.71$.
- $G_{m3} = a_{v64}a_{v65}g_{m74} = 0.90\times0.71\times46\ \mathrm{mA/V} \approx 29.6$ mA/V. $R_{o3} = r_{o74}\parallel r_{o75} = 16.7\ \mathrm{k}\parallel143\ \mathrm{k} = 15$ kΩ.
- $a_{v3} = G_{m3}(R_{o3}\parallel2\ \mathrm{k\Omega}) \approx 29.6\ \mathrm{mA/V}\times1.76\ \mathrm{k\Omega} \approx 52$.

Overall: $a_v = 186\times265\times52 \approx 2.6\times10^6$.

## Grading notes

+2: overall gain $(2.0$–$3.4)\times10^6$ from a stage-by-stage analysis with consistent stage gains near 190 / 265 / 52 (each within about ±30 %), including the doubling of the second-stage transconductance by the output bias loop (or an equivalent argument that the node-26 path carries no signal) and the input-stage load $R_{i2}/2$. +1: overall within $(1.5$–$4)\times10^6$ with one stage noticeably off for a stated simplification (e.g. Gm2 doubling omitted giving ≈ $1.5\times10^6$ while explicitly assuming both nodes drive the output equally; or IC64 kept at 33 μA). 0: correct method for most stages but a modeling slip that moves the result by more than a factor of 2, or only two of three stages computed. -2 (asserted as fact): a gain close to the low-beta value ($\approx10^5$) claimed for these betas, a result off by more than a factor of 5 from a wrong topology reading (e.g. the input stage treated as a resistively loaded pair, the output stage treated as an emitter follower with gain ≈ 1), or gain claimed independent of β.
