# Detailed solution - R070

### Step 1 — Set up the load line and choose a model

The source and bulk are grounded, so $V_{GS}=V_{in}$ and $V_{DS}=V_{out}$. With no other load at the output, the current through $R_D$ equals the drain current. The resistor voltage is $V_{DD}-V_{out}$, so

$$I_D=\frac{V_{DD}-V_{out}}{R_D}.$$

Use the saturation model as a trial and check its condition $V_{DS}\ge V_{ov}>0$ after solving. With $\lambda=0$ and overdrive $V_{ov}=V_{GS}-V_{TH}$, the saturation current is $I_D=\tfrac12\beta V_{ov}^2$, where

$$\beta=\mu_nC_{ox}\frac{W}{L}=(134\ \mu\mathrm{A/V^2})\frac{50}{0.5}
=13.4\ \mathrm{mA/V^2}.$$

A conducting device has positive overdrive, so take the positive square root:

$$V_{ov}=\sqrt{\frac{2I_D}{\beta}},\qquad V_{in}=V_{TH}+V_{ov}.$$

### Step 2 — Find the input for each output

For $V_{out}=1\ \mathrm{V}$, the load line gives $I_D=(3\ \mathrm{V}-1\ \mathrm{V})/(2\ \mathrm{k}\Omega)=1\ \mathrm{mA}$. Then

$$V_{ov}=\sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}}
\approx 0.386\ \mathrm{V}.$$

Since $V_{DS}=1\ \mathrm{V}>V_{ov}$, the saturation assumption holds. Adding $V_{TH}=0.7\ \mathrm{V}$ gives $V_{in}\approx 1.086\ \mathrm{V}$.

For $V_{out}=2.5\ \mathrm{V}$, the same load line gives $I_D=(3\ \mathrm{V}-2.5\ \mathrm{V})/(2\ \mathrm{k}\Omega)=0.25\ \mathrm{mA}$. This is one quarter of the first current, so the square-root relation in Step 1 gives half the overdrive, $V_{ov}\approx 0.193\ \mathrm{V}$. Again $V_{DS}=2.5\ \mathrm{V}>V_{ov}$, and adding $V_{TH}$ gives $V_{in}\approx 0.893\ \mathrm{V}$.

### Step 3 — Interpret the swing

As $V_{out}$ rises from 1 V to 2.5 V, the load-line current decreases, so the required $V_{ov}$ decreases as well. Throughout the range $V_{DS}\ge 1\ \mathrm{V}$ while $V_{ov}\le 0.3864\ \mathrm{V}$, so the device remains saturated. The output drops by 1.5 V for an input rise of about 0.193 V. The magnitude of the ratio $|\Delta V_{out}/\Delta V_{in}|$ is about 7.8.

The incremental gain varies with bias. Differentiating the saturation current gives $g_m=\beta V_{ov}=\sqrt{2\beta I_D}$. From the load line with a fixed supply, $A_v=-R_Dg_m$. It is about $-10.4\ \mathrm{V/V}$ at $V_{out}=1\ \mathrm{V}$ and $-5.2\ \mathrm{V/V}$ at $V_{out}=2.5\ \mathrm{V}$. This change in slope explains the nonlinearity over the swing.
