# Detailed solution - G382

Use the DM and CM half-circuits. In each, the gate current is set by $C_{gs}$ and $C_{gd}$ multiplied by the voltage across them, which follows from the low-frequency gains (Miller effect). This gives one input capacitance per mode; converting the definitions of $Z_{id}$ and $Z_{ic}$ into capacitors and matching them to the T and π networks gives the element values.

### Step 1 — Low-frequency gains of the half-circuits

With $g_{m1}=1$ mA/V, $r_{o1}=100$ kΩ, $r_{o3}=200$ kΩ and the CM tail resistance $r_{o5h}=2r_{o5}=100$ kΩ:

- DM half-circuit: the source of $M_1$ is at ac ground and the gate-to-drain gain is $a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-66.7$.
- CM half-circuit: the gate is at $v_{ic}$, the source returns to ground through $r_{o5h}$, and the drain load is $r_{o3}$. The drain and source currents are equal, so $v_s/r_{o5h}=-v_{oc}/r_{o3}$, i.e. $v_s=-v_{oc}/2$. KCL at the source, $v_s/r_{o5h}=g_{m1}(v_{ic}-v_s)+(v_{oc}-v_s)/r_{o1}$, then gives

$$
\frac{v_s}{v_{ic}}=\frac{25}{26}=0.962,\qquad \frac{v_{oc}}{v_{ic}}=-\frac{25}{13}=-1.92 .
$$

### Step 2 — Input capacitance of each half-circuit

The gate current is $sC_{gs}(v_g-v_s)+sC_{gd}(v_g-v_d)$. In DM, $v_s=0$ and $v_d=a_{dm}v_g$:

$$
C_{idh}=C_{gs}+C_{gd}(1-a_{dm})=180\ \mathrm{fF}+(20\ \mathrm{fF})(67.7)=1.53\ \mathrm{pF}.
$$

In CM, the source follows the gate closely, which bootstraps $C_{gs}$, while the drain moves opposite to the gate:

$$
C_{ich}=C_{gs}\left(1-\frac{25}{26}\right)+C_{gd}\left(1+\frac{25}{13}\right)=6.9\ \mathrm{fF}+58.5\ \mathrm{fF}=65.4\ \mathrm{fF}.
$$

Neglecting $r_{o1}$ in the CM half-circuit gives $v_s/v_{ic}\approx0.99$, a gain of about $-1.98$ and $C_{ich}\approx61$ fF.

### Step 3 — $Z_{id}$ and $Z_{ic}$

In DM, $i_{i1}=sC_{idh}v_{id}/2$ and $i_{i2}=-i_{i1}$, so $i_{id}=i_{i1}$ and

$$
Z_{id}=\frac{v_{id}}{i_{id}}=\frac{2}{sC_{idh}},
$$

a capacitor of $C_{idh}/2=0.77$ pF. In CM, $i_{i1}=i_{i2}=sC_{ich}v_{ic}$, so $i_{ic}=i_{i1}$ and $Z_{ic}=1/(sC_{ich})$, a capacitor of 65.4 fF.

### Step 4 — T-network elements

Each series element is $Z_{id}/2=1/(sC_{idh})$, a 1.53-pF capacitor. The shunt element is

$$
\frac{Z_{ic}}{2}-\frac{Z_{id}}{4}=\frac{1}{s}\left(\frac{1}{2C_{ich}}-\frac{1}{2C_{idh}}\right),\qquad
C=\left(\frac{1}{130.8\ \mathrm{fF}}-\frac{1}{3067\ \mathrm{fF}}\right)^{-1}=137\ \mathrm{fF}.
$$

### Step 5 — π-network elements

Each shunt element is $Z_{ic}$, a 65.4-fF capacitor. The bridging element $Z_{id}\parallel(-2Z_{ic})$ has admittance $sC_{idh}/2-sC_{ich}/2$, i.e. a capacitor

$$
C=\frac{C_{idh}}{2}-\frac{C_{ich}}{2}=767\ \mathrm{fF}-33\ \mathrm{fF}=734\ \mathrm{fF}.
$$

| Element | Value | With $C_{ich}\approx61$ fF |
|---|---|---|
| T series, $Z_{id}/2$ | 1.53 pF each | 1.53 pF |
| T shunt, $Z_{ic}/2-Z_{id}/4$ | 137 fF | 128 fF |
| π shunt, $Z_{ic}$ | 65.4 fF each | 61 fF |
| π bridge, $Z_{id}\parallel(-2Z_{ic})$ | 734 fF | 736 fF |

The DM input capacitance is large because the Miller effect multiplies $C_{gd}$ by $1+66.7$, whereas in CM the tail degeneration keeps the gain small and nearly cancels $C_{gs}$.
