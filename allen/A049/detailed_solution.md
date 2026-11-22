# Detailed solution - A049

Write the body-effect parameter in terms of the oxide capacitance and the doping of the body under the channel, note which region forms the body of each transistor in an n-well process, and estimate the doping each value of $\gamma$ implies.

### Step 1 — What $\gamma$ depends on

The body effect comes from the depletion charge under the channel. For a uniformly doped body, the threshold voltage is $V_T=V_{T0}+\gamma\big(\sqrt{|2\phi_F|+|v_{SB}|}-\sqrt{|2\phi_F|}\big)$ with

$$
\gamma=\frac{\sqrt{2q\varepsilon_{Si}N_{SUB}}}{C_{ox}},\qquad C_{ox}=\frac{\varepsilon_{ox}}{t_{ox}},
$$

where $N_{SUB}$ is the doping of the body (substrate or well) under the channel. Both transistors have the same $t_{ox}=140$ Å, so $C_{ox}$ is the same, and mobility, carrier type and work functions do not enter $\gamma$. The only quantity that can differ is $N_{SUB}$, and $\gamma\propto\sqrt{N_{SUB}}$.

### Step 2 — Which body each transistor sits in

In an n-well process the n-channel transistor is built directly in the starting p-substrate, which is lightly doped (acceptors). The p-channel transistor is built in the n-well, made by implanting and diffusing donors into that substrate. To turn the region n-type, the donor concentration must exceed (over-compensate) the substrate acceptor concentration, and in practice the net well doping is made several times higher than the substrate doping, to keep the well resistance low (against latch-up), to control punch-through and to isolate the well. The body of the PMOS is therefore more heavily doped than the body of the NMOS, so $\gamma_P>\gamma_N$.

### Step 3 — Doping implied by the given values

With $\varepsilon_{ox}=3.9\varepsilon_0$ and $\varepsilon_{Si}=11.7\varepsilon_0$ ($\varepsilon_0=8.854\times10^{-14}$ F/cm):

$$
C_{ox}=\frac{3.9(8.854\times10^{-14}\ \mathrm{F/cm})}{140\times10^{-8}\ \mathrm{cm}}=2.466\times10^{-7}\ \mathrm{F/cm^2},
\qquad N_{SUB}=\frac{(\gamma C_{ox})^2}{2q\varepsilon_{Si}}.
$$

| Transistor | Body | $\gamma$ ($\mathrm{V^{1/2}}$) | $N_{SUB}$ ($\mathrm{cm^{-3}}$) |
|---|---|---|---|
| n-channel | p-substrate | 0.40 | $2.9\times10^{16}$ |
| p-channel | n-well | 0.57 | $6.0\times10^{16}$ |

The ratio follows directly from $\gamma\propto\sqrt{N_{SUB}}$:

$$
\frac{N_{well}}{N_{substrate}}=\Big(\frac{\gamma_P}{\gamma_N}\Big)^2=\Big(\frac{0.57}{0.4}\Big)^2=2.03 .
$$

So $\gamma_P$ is larger because the n-well, the body of the p-channel transistor, is about twice as heavily doped as the p-substrate in which the n-channel transistor is built.
