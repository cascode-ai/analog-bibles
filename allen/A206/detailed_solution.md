# Detailed solution - A206

M1 is a p-channel follower: its source is the output, and it can only sink current from the output toward −2.5 V. The output rises as $v_{IN}$ rises, until M1 turns off; beyond that the output is set by the 200-µA source and the load resistor alone. Find that level and check that M1 is indeed off and the current source still has headroom.

### Step 1 — Output with M1 off

If M1 conducts no current, KCL at the output leaves the 200-µA source feeding only the load. In steady state the capacitor carries no current, so

$$
v_{OUT}=I\,R_L=(200\ \mu\mathrm A)(10\ \mathrm{k\Omega})=2.0\ \mathrm V .
$$

### Step 2 — Check that M1 is off

M1 conducts only if $V_{SG1}=v_{OUT}-v_{IN}>|V_T|=0.7$ V. With $v_{IN}$ at its maximum of +2.5 V and $v_{OUT}=2.0$ V,

$$
V_{SG1}=2.0-2.5=-0.5\ \mathrm V<0.7\ \mathrm V,
$$

so M1 is cut off; it stays off for any $v_{IN}>v_{OUT}-0.7\ \mathrm V=1.3$ V. M1 cannot raise the output further, because a p-channel follower only removes current from it.

### Step 3 — Headroom of the current source

The ideal source runs from +2.5 V to the output at 2.0 V, so it has 0.5 V across it and can deliver its full 200 µA. Therefore

$$
v_{OUT}(\max)=+2.0\ \mathrm V .
$$
