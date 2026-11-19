# Detailed solution - R001

Use the saturation square law after checking the operating region. Plot current magnitudes so the NFET and PFET can share axes.

### Step 1 — Thresholds and operating region

$W/L=(50\ \mu\mathrm m)/(0.5\ \mu\mathrm m)=100$. Source and bulk are tied, so $V_{SB}=0$ and there is no body-effect shift: $V_{TH,n}=0.7$ V and $|V_{TH,p}|=0.8$ V. Neglect subthreshold conduction.

For a conducting device, saturation requires $|V_{DS}|\ge V_{ov}=|V_{GS}|-|V_{TH}|$. At the largest gate voltage,
$$
V_{ov,n}=3-0.7=2.3\ \mathrm V<3\ \mathrm V,\qquad
V_{ov,p}=3-0.8=2.2\ \mathrm V<3\ \mathrm V.
$$
Thus neither device enters triode anywhere in the sweep.

### Step 2 — Current functions

The square-law saturation model, including first-order CLM, is
$$
|I_D|=\frac12\mu C_{ox}\frac WL V_{ov}^2(1+\lambda|V_{DS}|).
$$
The coefficients and fixed CLM factors are
$$
\begin{aligned}
k_n&=\tfrac12(134\ \mu\mathrm{A/V^2})(100)=6.70\ \mathrm{mA/V^2}, &F_n&=1+(0.1\ \mathrm{V^{-1}})(3\ \mathrm V)=1.3,\\
k_p&=\tfrac12(38.4\ \mu\mathrm{A/V^2})(100)=1.92\ \mathrm{mA/V^2}, &F_p&=1+(0.2\ \mathrm{V^{-1}})(3\ \mathrm V)=1.6.
\end{aligned}
$$
With $x=|V_{GS}|$ and $[z]_+=\max(z,0)$, the plotted functions are
$$
I_{D,n}=k_n[x-0.7\ \mathrm V]_+^2 F_n,\qquad
|I_{D,p}|=k_p[x-0.8\ \mathrm V]_+^2 F_p.
$$
Set $F_n=F_p=1$ for the no-CLM comparison. The signed PFET drain current is negative under the convention of current entering the drain.

### Step 3 — Endpoints and curves

At $x=3$ V, without CLM,
$$
I_{D,n}=(6.70\ \mathrm{mA/V^2})(2.3\ \mathrm V)^2=35.4\ \mathrm{mA},\qquad
|I_{D,p}|=(1.92\ \mathrm{mA/V^2})(2.2\ \mathrm V)^2=9.29\ \mathrm{mA}.
$$
Multiplication by 1.3 and 1.6 gives 46.1 mA and 14.9 mA with CLM.

![Drain current curves with thresholds and endpoint values](/q/R001/solution-curves.svg)

Below threshold each current is zero. Above threshold its slope is $2k(x-|V_{TH}|)F$, initially zero and increasing linearly: each curve is an upward-opening parabola. At 3 V the NFET/PFET current ratio is $35.4/9.29\approx3.8$ without CLM, or $46.1/14.9\approx3.1$ with CLM. These are square-law model curves; high-field effects are outside this model.
