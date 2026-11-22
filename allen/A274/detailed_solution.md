# Detailed solution - A274

Every dc branch of the op amp runs from $V_{DD}$ to $V_{SS}$, so the static power is the total supply voltage times the sum of the branch currents. No other dc path exists (the gates draw no current).

### Step 1 — Branch currents

The three branches are the bias string M9–M8 ($I_8$), the differential pair with its mirror load ($I_5$, split between M1/M3 and M2/M4), and the output stage M6–M7 ($I_7$):

$$
I_{total}=I_8+I_5+I_7=(22.8+45.7+228)\ \mu\mathrm A=296.5\ \mu\mathrm A .
$$

### Step 2 — Power dissipation

$$
P_{diss}=(V_{DD}-V_{SS})\,I_{total}=(3\ \mathrm V)(296.5\ \mu\mathrm A)=0.89\ \mathrm{mW}.
$$

The output stage accounts for 77 % of it.
