# Detailed solution - A055

Read the dimensions of the drain and source diffusions from the 1 µm grid, identify the part of the n⁺ that carries current between the contacts and the channel, convert it to squares of sheet resistance, and add the parallel contact resistance.

### Step 1 — Dimensions from the layout

From [Fig. 1]:

- the n⁺ active area is 20 µm wide (along the current direction) and 22 µm tall;
- the poly gate crossing it is 2 µm wide, so the drain and the source are each a $9\ \mu\mathrm m\times22\ \mu\mathrm m$ n⁺ region;
- each region carries one column of five $2\ \mu\mathrm m\times2\ \mu\mathrm m$ contacts, beginning 2 µm from its outer edge, under a 4 µm-wide metal strip.

The layout is symmetric about the gate, so $R_D=R_S$.

### Step 2 — Resistance of the n⁺ path

Current enters the n⁺ through the contacts and flows laterally to the channel edge under the gate. The metal shorts everything outside the contacts, so the resistive path runs from the inner edge of the contact column to the gate edge, over the full 22 µm width of the diffusion:

$$
\ell=9\ \mu\mathrm m-2\ \mu\mathrm m-2\ \mu\mathrm m=5\ \mu\mathrm m,\qquad
R_{n^+}=R_\square\frac{\ell}{w}=35\ \Omega/\mathrm{sq}\times\frac{5\ \mu\mathrm m}{22\ \mu\mathrm m}=35\ \Omega/\mathrm{sq}\times0.227\ \mathrm{sq}=7.95\ \Omega .
$$

The current spreads from five discrete contacts rather than from a continuous edge, so this uniform-strip value is a slightly optimistic estimate; measuring the length from the metal edge or from the contact centres instead would give 6.4 Ω or 9.5 Ω of n⁺.

### Step 3 — Contacts and total

The five contacts of one terminal carry the current in parallel:

$$
R_{contact}=\frac{1\ \Omega}{5}=0.2\ \Omega .
$$

The two parts are in series between the external terminal and the intrinsic transistor:

$$
R_D=R_S=7.95\ \Omega+0.2\ \Omega=8.15\ \Omega .
$$
