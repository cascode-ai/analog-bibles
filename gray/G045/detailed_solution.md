# Detailed solution - G045

The current source removes a constant 10 µA from the source node, so every node voltage changes as a linear ramp whose slope is the current divided by the capacitance being discharged. The transistor decides which capacitance that is: while it is off, only the source capacitance; in saturation, the source is held one $V_{GS}$ below the gate and the current is drawn from the drain capacitance; in triode, the two nodes are joined by the channel and discharge together. Find the node capacitances, then the three phases.

### Step 1 — Node capacitances

Each diffusion, at its zero-bias value, has bottom area $1\times10=10\ \mu$m² and a field-oxide periphery of $10+1+1=12\ \mu$m, and overlaps the grounded gate by $W$:

$$
C_S=C_D=(10\ \mu\mathrm m^2)(0.2\ \mathrm{fF/\mu m^2})+(12\ \mu\mathrm m)(1.2\ \mathrm{fF/\mu m})+(10\ \mu\mathrm m)(0.35\ \mathrm{fF/\mu m})=2+14.4+3.5=19.9\ \mathrm{fF}.
$$

The substrate and gate are fixed voltages, so both are ac grounds for these capacitors. The capacitance between the gate and the channel is left out, as in the simplified statement.

### Step 2 — Phase 1: transistor off

With the gate at 0 V and the source at +1.5 V, $V_{GS}=-1.5\ \mathrm V<V_t$, so the device is off and the drain floats at +1.5 V. The 10 µA discharges $C_S$ alone:

$$
\frac{dV_S}{dt}=-\frac{10\ \mu\mathrm A}{19.9\ \mathrm{fF}}=-0.50\ \mathrm{V/ns}.
$$

The device turns on when $V_{GS}=-V_S=V_t$, i.e. at $V_S=-0.6$ V, after $(1.5+0.6)\ \mathrm V/(0.50\ \mathrm{V/ns})=4.2$ ns.

### Step 3 — Phase 2: saturation

Once on, the transistor supplies the 10 µA from the drain. With $V_{DS}$ large it is in saturation, and the source settles where $I_D=10\ \mu$A:

$$
V_{ov}=\sqrt{\frac{2I_D}{k'(W/L_{\text{eff}})}}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(10/0.82)}}=0.09\ \mathrm V,\qquad V_S=-(V_t+V_{ov})=-0.69\ \mathrm V,
$$

with $L_{\text{eff}}=1-2(0.09)=0.82\ \mu$m. The source then stays nearly constant, and the drain current discharges $C_D$ at the same 0.50 V/ns. Saturation lasts until $V_{DS}=V_{ov}$, i.e. $V_D=V_G-V_t=-0.6$ V, which takes another $2.1\ \mathrm V/(0.50\ \mathrm{V/ns})=4.2$ ns, to about 8.4 ns.

### Step 4 — Phase 3: triode

Below $V_D=-0.6$ V the channel is a resistor connecting the two nodes, $V_{DS}$ shrinks to a few millivolts, and the 10 µA discharges $C_S+C_D$ together:

$$
\frac{dV}{dt}=-\frac{10\ \mu\mathrm A}{39.8\ \mathrm{fF}}=-0.25\ \mathrm{V/ns}.
$$

The drain reaches −1.5 V about 3.3 ns later, at $t\approx12$ ns, with the source just below it.

### Step 5 — Simulation and sketch

A level-1 ngspice simulation of the same model confirms the hand analysis: the source reaches −0.6 V at 4.18 ns, the drain reaches −0.6 V at 8.54 ns and −1.5 V at 11.9 ns, and the source sits at −0.692 V during saturation.

```spice
* G045 source/drain discharge
M1 d 0 s b nch W=10u L=0.82u
Vb b 0 -1.5
CS s 0 19.9f
CD d 0 19.9f
I1 s nm 0 PWL(0 0 1p 10u)
Vm nm 0 -1.5
.model nch nmos level=1 vto=0.6 kp=194u gamma=0 lambda=0
.ic v(s)=1.5 v(d)=1.5
.tran 10p 14n uic
.end
```

![Source and drain voltages versus time: the source ramps down to −0.6 V by 4.2 ns, holds near −0.69 V while the drain ramps to −0.6 V by 8.5 ns, then both fall together at half the rate to −1.5 V at 11.9 ns](/q/G045/solution-waveforms.svg)

Including the gate-to-channel capacitance $WL_{\text{eff}}C_{ox}\approx35$ fF, which must be charged as the channel forms and moves with the nodes in triode, would slow the last phase to about 0.13 V/ns and push the end to about 15 ns; the shape is unchanged.
