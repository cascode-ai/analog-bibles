# Detailed solution - A013

A MOS process builds the circuit by repeating a small set of operations on the wafer: oxidation, diffusion, ion implantation, deposition and etching. Each acts on regions chosen by photolithography, which patterns a resist layer through a mask. For each step, state what it does physically and what it is used for in the MOS structure.

### Step 1 — Oxidation

Oxidation grows silicon dioxide on the silicon surface by heating the wafer to about 700–1100 °C in oxygen (dry oxidation: slow, dense, high-quality oxide) or in steam (wet oxidation: faster, for thick layers). The oxide grows partly into the silicon, consuming about 0.44 of its own thickness of silicon. Uses: the thin gate oxide that forms the MOS capacitor, the thick field oxide that isolates devices, pad oxides under nitride, and masking or protective layers.

### Step 2 — Diffusion

Diffusion moves dopant atoms from the surface into the silicon at high temperature (about 800–1400 °C), driven by the concentration gradient. It is usually done in two stages: a predeposition from a constant surface source fixes the dose, and a drive-in redistributes it to the desired depth. Uses: forming pn junctions and wells, and driving implanted dopants deeper. Because every later high-temperature step diffuses dopants further, the thermal budget of the whole process must be controlled.

### Step 3 — Ion implantation

Ion implantation accelerates ionized dopant atoms to tens or hundreds of keV and embeds them in the silicon, either directly or through a thin film. The dose is set accurately by counting the beam current, and the depth by the acceleration energy, at near room temperature. An anneal afterwards repairs the lattice damage and electrically activates the dopants. Uses: well formation, threshold-voltage adjustment, field (channel-stop) implants, lightly doped drain (LDD) regions and source/drain doping.

### Step 4 — Deposition

Deposition adds films of materials other than thermal oxide on top of the wafer. Chemical vapour deposition (CVD, LPCVD) forms polysilicon, oxide and nitride; sputtering or evaporation forms metal layers. Uses: polysilicon gates and resistors, interlevel dielectrics, metal interconnect and the final passivation layer.

### Step 5 — Etching

Etching removes material wherever it is not protected by a patterned mask, transferring the lithographic pattern into the underlying film. Wet etching uses liquid chemicals and is largely isotropic; dry etching (plasma, reactive-ion etching) can be strongly anisotropic, giving vertical sidewalls for fine features. Its key properties are selectivity (etching the target film much faster than the mask and the layer beneath) and anisotropy. Uses: defining gates, contact openings, metal lines and every other patterned layer.

Modern processes also use chemical-mechanical polishing (CMP) to planarize the surface between layers, but the five steps above, each patterned by photolithography, are the basic set.
