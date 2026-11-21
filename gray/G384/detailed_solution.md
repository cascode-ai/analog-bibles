# Detailed solution - G384

Use the DM and CM half-circuits at the new bias. The gate current of each half is set by $C_{gs}$ and $C_{gd}$ times the voltages across them, obtained from the low-frequency gains (Miller effect). Convert the resulting half-circuit capacitances into $Z_{id}$ and $Z_{ic}$, then into the T and π elements.

### Step 1 — Low-frequency gains

At $I_D=50\ \mu$A and $|V_{ov}|=0.1$ V: $g_{m1}=1$ mA/V, $r_{o1}=200$ kΩ, $r_{o3}=400$ kΩ and $r_{o5h}=2r_{o5}=200$ kΩ.

- DM: source at ac ground, $a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-133.3$.
- CM: with $r_{o5h}$ in the source, the source follows the gate as $v_s/v_{ic}\approx g_{m1}r_{o5h}/(1+g_{m1}r_{o5h})=200/201$, and the drain gain is $a_{cm}\approx-(R_{o(\mathrm{down})}\parallel r_{o3})/r_{o5h}=-(396\ \mathrm{k\Omega})/(200\ \mathrm{k\Omega})=-1.98$. Solving the CM half-circuit exactly, keeping $r_{o1}$ (equal drain and source currents give $v_s=-v_{oc}/2$, then KCL at the source), gives $v_s/v_{ic}=0.980$ and $a_{cm}=-1.96$.

### Step 2 — Half-circuit input capacitances

The gate current is $sC_{gs}(v_g-v_s)+sC_{gd}(v_g-v_d)$. In DM ($v_s=0$, $v_d=a_{dm}v_g$):

$$
C_{idh}=C_{gs}+C_{gd}(1-a_{dm})=180\ \mathrm{fF}+(20\ \mathrm{fF})(134.3)=2.87\ \mathrm{pF}.
$$

In CM the source is bootstrapped and the drain moves opposite to the gate:

$$
C_{ich}=\frac{C_{gs}}{1+g_{m1}r_{o5h}}+C_{gd}(1-a_{cm})=0.9\ \mathrm{fF}+(20\ \mathrm{fF})(2.98)=60.5\ \mathrm{fF},
$$

or, with the exact gains, $C_{ich}=180\ \mathrm{fF}(0.020)+20\ \mathrm{fF}(2.96)=62.7$ fF.

### Step 3 — $Z_{id}$ and $Z_{ic}$

In DM, $i_{id}=i_{i1}=sC_{idh}v_{id}/2$, so $Z_{id}=2/(sC_{idh})$, a capacitor of $C_{idh}/2=1.43$ pF. In CM, $i_{ic}=i_{i1}=sC_{ich}v_{ic}$, so $Z_{ic}=1/(sC_{ich})$, a capacitor of about 60 fF.

### Step 4 — T-network elements

Each series element $Z_{id}/2=1/(sC_{idh})$ is a 2.87-pF capacitor. The shunt element $Z_{ic}/2-Z_{id}/4$ is a capacitor $C$ with

$$
\frac{1}{C}=\frac{1}{2C_{ich}}-\frac{1}{2C_{idh}}=\frac{1}{121\ \mathrm{fF}}-\frac{1}{5733\ \mathrm{fF}},\qquad C=124\ \mathrm{fF}
$$

(128 fF with $C_{ich}=62.7$ fF).

### Step 5 — π-network elements

Each shunt element $Z_{ic}$ is a capacitor of about 60 fF (62.7 fF exact). The bridging element $Z_{id}\parallel(-2Z_{ic})$ has admittance $s(C_{idh}-C_{ich})/2$:

$$
C=\frac{C_{idh}}{2}-\frac{C_{ich}}{2}=1433\ \mathrm{fF}-30\ \mathrm{fF}=1.40\ \mathrm{pF}.
$$

| Element | Value |
|---|---|
| T series, $Z_{id}/2$ | 2.87 pF each |
| T shunt, $Z_{ic}/2-Z_{id}/4$ | 124 fF (128 fF exact) |
| π shunt, $Z_{ic}$ | 60 fF each (62.7 fF exact) |
| π bridge, $Z_{id}\parallel(-2Z_{ic})$ | 1.40 pF |

The doubled DM gain at this bias nearly doubles the Miller-multiplied DM input capacitance, while the CM capacitance, set by $C_{gd}$ times a gain near $-2$, is almost unchanged.
