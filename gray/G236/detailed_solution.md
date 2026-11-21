# Detailed solution - G236

The followers $M_1$, $M_4$ transfer the gate signals to the differential pair, which converts the differential input into a differential output. Find the follower gain, then use the differential-mode half circuit of $M_2$, $M_3$.

### Step 1 — Bias and operating regions

The tail splits equally, $I_{D2}=I_{D3}=0.5$ mA, and each follower carries 10 µA. With $\beta=k_n'(W/L)=(60\ \mu\mathrm{A/V^2})(100/1.6)=3.75$ mA/V² and $V_{ov}=\sqrt{2I_D/\beta}$, at $v_i=0$:

$$
V_{GS1}=1\ \mathrm V+\sqrt{\frac{2(10\ \mu\mathrm A)}{3.75\ \mathrm{mA/V^2}}}=1.073\ \mathrm V,\qquad
V_{GS2}=1\ \mathrm V+\sqrt{\frac{2(0.5\ \mathrm{mA})}{3.75\ \mathrm{mA/V^2}}}=1.516\ \mathrm V.
$$

So the gate of $M_2$ sits at −1.07 V and its drain at $6\ \mathrm V-(0.5\ \mathrm{mA})(5\ \mathrm{k\Omega})=3.5$ V, well above $V_G-V_t$; all devices are saturated. The small-signal transconductance of the pair devices is

$$
g_{m2}=\sqrt{2\beta I_D}=\sqrt{2(3.75\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})}=1.936\ \mathrm{mA/V}.
$$

### Step 2 — Gain of the source followers

The gates of $M_2$, $M_3$ draw no current, the 10-µA bias sources are ideal (infinite resistance) and $\lambda=\gamma=0$, so the source of $M_1$ is unloaded. Its source current cannot change, so $g_{m1}v_{gs1}=0$, i.e. $v_{s1}=v_{g1}$: the follower gain is exactly 1. Likewise no signal current flows in the 10-kΩ resistors, so $v_{g1}=v_i$ and $v_{g4}=0$. The pair therefore sees a differential input $v_{id}=v_{g2}-v_{g3}=v_i$.

### Step 3 — Differential-mode gain of the pair

By symmetry the common-source node is an ac ground for differential signals, so each half is a common-source stage with input $v_{id}/2$ and load $R_D=5\ \mathrm{k\Omega}$; the drain of $M_2$ swings $-g_{m2}R_Dv_{id}/2$ and the drain of $M_3$ the opposite. With $v_o$ taken from the drain of $M_2$ (+) to the drain of $M_3$ (−):

$$
\frac{v_o}{v_i}=-g_{m2}R_D=-(1.936\ \mathrm{mA/V})(5\ \mathrm{k\Omega})=-9.68 .
$$

The common-mode part of the input ($v_i/2$ on both gates) is rejected by the ideal tail source and produces no differential output.
