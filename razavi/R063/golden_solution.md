# Golden Solution - R063

## Reference answer

- Gate step. The knees give $V_{ov}=V_{GS}-V_{TH}\approx 0.1,0.2,\ldots,0.6\ \mathrm{V}$, so $\Delta V_{GS}\approx 0.10\ \mathrm{V}$.
- Channel-length modulation. On the top curve, $I_D\approx2.95$ mA at $V_{DS}=0.6$ V and $3.25$ mA at $1.0$ V. The saturation slope is $0.75\ \mathrm{mA/V}$ and the extrapolated intercept is $I_{D0}\approx2.50$ mA. Thus $\lambda=0.75/2.50\ \mathrm{V^{-1}}\approx0.30\ \mathrm{V^{-1}}$.
- Mobility. From $I_{D0}=\tfrac12\beta V_{ov}^2$, $\beta\approx13.9\ \mathrm{mA/V^2}$. With $C_{ox}=3.9\epsilon_0/t_{ox}\approx0.0192\ \mathrm{F/m^2}$ and $W/L=125$, $\mu_n=\beta/[C_{ox}(W/L)]\approx5.8\times10^{-3}\ \mathrm{m^2/(V\,s)}=58\ \mathrm{cm^2/(V\,s)}$.
- Threshold. Fig. 1 gives overdrives, so $V_{TH}=V_{GS,6}-0.1\ \mathrm{V}$ for the bottom curve. If the top curve has $V_{GS}=1.0$ V, then $V_{TH}\approx0.4$ V.

![Auxiliary square-law model fit](/q/R063/solution-01.svg)

## Grading notes

- +2 for a step of 0.09–0.11 V, $\lambda$ of about 0.25–0.4 V⁻¹, $\mu_n$ of about 50–75 cm²/(V·s) with the $C_{ox}$ and $W/L=125$ calculation, and either the stated $V_{TH}$ relation with its identifiability explanation or about 0.4 V with the absolute-$V_{GS}$ assumption.
- +1 for three correct quantities, or all four with one slip. A correct SI mobility with a wrong cm²/(V·s) conversion earns at most 0 for the mobility part and +1 overall if the other three quantities are correct.
- 0 for about half correct.
- −2 for an asserted current spacing as the gate step, a $\lambda$ error of an order of magnitude, a mobility error of at least 3× due to a formula or derivation-units error, or a threshold asserted from a misread $V_{DS}$ axis.
