# 详细步骤 - G377

漏电流散粒噪声是白噪声，而经电容耦合的沟道噪声按 $\omega^2$ 增长。由氧化层厚度和几何尺寸求出 $C_{gs}$，令两个谱密度相等，解出频率。

### 第 1 步 — 栅极电容

$$
C_{ox}=\frac{\epsilon_{ox}}{t_{ox}}=\frac{3.45\times10^{-11}\ \mathrm{F/m}}{80\times10^{-10}\ \mathrm m}=4.31\times10^{-3}\ \mathrm{F/m^2}=4.31\ \mathrm{fF/\mu m^2},
$$

由 $WL=(50\ \mu\mathrm m)(0.5\ \mu\mathrm m)=25\ \mu\mathrm m^2$，

$$
C_{gs}=\frac23C_{ox}WL=\frac23(4.31\ \mathrm{fF/\mu m^2})(25\ \mu\mathrm m^2)=71.9\ \mathrm{fF}.
$$

### 第 2 步 — 两个谱密度

$$
\frac{\overline{i_{g,\mathrm{shot}}^2}}{\Delta f}=2qI_G=2(1.6\times10^{-19}\ \mathrm C)(0.05\times10^{-15}\ \mathrm A)=1.6\times10^{-35}\ \mathrm{A^2/Hz},
$$

$$
\frac{\overline{i_{g,\mathrm{ind}}^2}}{\Delta f}=\frac{16}{15}kT\,\omega^2C_{gs}^2,\qquad
\frac{16}{15}kT=4.43\times10^{-21}\ \mathrm J,\quad C_{gs}^2=5.17\times10^{-27}\ \mathrm{F^2}.
$$

前者为常数，后者按 $\omega^2$ 增大，因此两者只在一个频率处相交，低于该频率时漏电流散粒噪声占主导。

### 第 3 步 — 交点频率

令两个谱密度相等：

$$
\omega^2=\frac{2qI_G}{\frac{16}{15}kT\,C_{gs}^2}=\frac{1.6\times10^{-35}\ \mathrm{A^2/Hz}}{(4.43\times10^{-21}\ \mathrm J)(5.17\times10^{-27}\ \mathrm{F^2})}=6.99\times10^{11}\ \mathrm{s^{-2}},
$$

$$
\omega=8.36\times10^5\ \mathrm{rad/s},\qquad f=\frac{\omega}{2\pi}=133\ \mathrm{kHz}.
$$

高于约 133 kHz 时，尽管漏电流极小，该器件的栅极噪声电流仍由经 $C_{gs}$ 耦合的沟道噪声主导。
