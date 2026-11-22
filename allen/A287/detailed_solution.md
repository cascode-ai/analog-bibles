# Detailed solution - A287

The cascode gate bias is $V_{Bias}=V_{GS,MB5}$, measured from the common-source node, so MB5 must be sized to produce the bias that puts M1 and M2 exactly at the edge of saturation. The current of MB5 comes from MB1 and MB2 through the mirror MB3–MB4, which fixes the MB1/MB2 currents; since MB1 and MB2 share their gate and source with M1 and M2, their sizes follow from current scaling. All devices are saturated with $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$.

### Step 1 — Required bias voltage

With $V_{DS}(\mathrm{sat})=\sqrt{2I/(K'_N W/L)}$ for M1 and MC1 (both 10, 50 µA):

$$
V_{DS}(\mathrm{sat})=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.302\ \mathrm V,
$$
$$
V_{Bias}=V_{DS1}+V_{GS,C1}=V_{DS}(\mathrm{sat})+V_{TN}+V_{DS}(\mathrm{sat})=0.7\ \mathrm V+2(0.302\ \mathrm V)=1.303\ \mathrm V .
$$

### Step 2 — Size of MB5

MB5 carries 5 µA with $V_{GS,MB5}=1.303$ V, i.e. an overdrive of 0.603 V:

$$
\left(\frac WL\right)_{MB5}=\frac{2I_{MB5}}{K'_N(V_{GS,MB5}-V_{TN})^2}=\frac{2(5\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.603\ \mathrm V)^2}=0.25 .
$$

### Step 3 — MB1–MB4

MB3 = MB4, so the mirror copies with ratio 1: $I_{MB3}=I_{MB4}=I_{MB5}=5$ µA. MB3 carries the sum of the MB1 and MB2 drain currents, which are equal by symmetry: $I_{MB1}=I_{MB2}=2.5$ µA. MB1 and MB2 have the same $V_{GS}$ as M1 and M2 (gates on the inputs, sources on the common-source node), so

$$
\left(\frac WL\right)_{MB1}=\left(\frac WL\right)_{MB2}=10\cdot\frac{2.5\ \mu\mathrm A}{50\ \mu\mathrm A}=0.5 .
$$

The size of MB3 = MB4 is not fixed by these conditions; only their equality matters. It sets the drain voltage of MB1/MB2 and must be chosen so that MB1, MB2 and MB4 stay saturated (for example W/L = 1).

### Step 4 — Current in M5

Every branch that returns to the common-source node passes through M5: M1, M2, MB1, MB2, and MB5 (whose source is also at that node):

$$
I_5=50+50+2.5+2.5+5=110\ \mu\mathrm A .
$$
