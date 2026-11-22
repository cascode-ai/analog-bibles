# Detailed solution - A058

In cutoff there is no channel, so the gate couples to the drain only through the overlap of the gate over the drain diffusion. Multiply the overlap capacitance per unit width by the channel width read from the layout.

### Step 1 — Which capacitance remains in cutoff

With $v_{GS}<V_T$ no inversion layer forms; the gate-to-channel-area capacitance $C_{ox}WL$ then couples the gate to the bulk, not to the drain. What remains between gate and drain is the overlap capacitance: the gate edge extends a small distance over the drain diffusion (lateral diffusion plus fringing), along the whole channel width. Its value is specified per unit width as CGDO, so

$$
C_{GD}=\mathrm{CGDO}\cdot W .
$$

### Step 2 — Width and result

In [Fig. 1] the poly gate crosses the n⁺ active area over 22 grid squares, so $W=22\ \mu$m (the channel length, 2 µm, does not enter the overlap term). Then

$$
C_{GD}=(220\times10^{-12}\ \mathrm{F/m})(22\times10^{-6}\ \mathrm m)=4.84\times10^{-15}\ \mathrm F=4.84\ \mathrm{fF}.
$$
