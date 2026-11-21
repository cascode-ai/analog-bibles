# Detailed solution - A038

Outside the silicide block the polysilicon is covered by low-resistance polysilicide, so the resistor body is only the unsilicided poly under the block. Convert the resistivity to a sheet resistance using the poly thickness, count the squares from the block length and poly width, and multiply.

### Step 1 — Sheet resistance

From the side view the polysilicon is $t=8000$ Å $=0.8\ \mu$m $=8\times10^{-5}$ cm thick. A film of resistivity $\rho$ and thickness $t$ has sheet resistance

$$
R_\square=\frac{\rho}{t}=\frac{4\times10^{-3}\ \Omega\cdot\mathrm{cm}}{8\times10^{-5}\ \mathrm{cm}}=50\ \Omega/\square .
$$

### Step 2 — Number of squares

Current flows along the poly strip, so the length is the extent of the silicide block along the strip, $L=3\ \mu$m, and the width is the poly width, $W=1\ \mu$m (from the top view):

$$
N=\frac{L}{W}=\frac{3\ \mu\mathrm m}{1\ \mu\mathrm m}=3\ \text{squares}.
$$

The block is wider than the poly, but only the poly conducts, so the block's extent across the strip does not matter.

### Step 3 — Resistance

$$
R=NR_\square=3\times50\ \Omega=150\ \Omega .
$$

This neglects, as instructed, the silicided poly between the block and the contacts, the contact resistance and the metal. Those add a few ohms at most, since silicided poly has a sheet resistance of only a few ohms per square.
