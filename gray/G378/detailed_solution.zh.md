# 详细步骤 - G378

频带内的总噪声是谱密度的积分。白噪声形式的漏电流散粒噪声积分后与 $f_{BW}$ 成正比，而谱密度按 $f^2$ 上升的耦合沟道噪声积分后为 $f_{BW}^3/3$。令两个积分相等，解出 $f_{BW}$。

### 第 1 步 — 器件参数

与比较点谱密度时相同，$C_{ox}=\epsilon_{ox}/t_{ox}=4.31\ \mathrm{fF/\mu m^2}$，

$$
C_{gs}=\frac23C_{ox}WL=\frac23(4.31\ \mathrm{fF/\mu m^2})(25\ \mu\mathrm m^2)=71.9\ \mathrm{fF},\qquad
2qI_G=1.6\times10^{-35}\ \mathrm{A^2/Hz}.
$$

### 第 2 步 — 积分噪声电流

$$
\overline{i_{g,\mathrm{shot}}^2}=\int_0^{f_{BW}}2qI_G\,df=2qI_Gf_{BW},
$$

$$
\overline{i_{g,\mathrm{ind}}^2}=\int_0^{f_{BW}}\frac{16}{15}kT(2\pi f)^2C_{gs}^2\,df=\frac{16}{15}kT(2\pi)^2C_{gs}^2\,\frac{f_{BW}^3}{3}.
$$

### 第 3 步 — 总量相等

令两者相等并约去一个因子 $f_{BW}$：

$$
f_{BW}^2=\frac{3\cdot2qI_G}{\frac{16}{15}kT(2\pi)^2C_{gs}^2}=3f_0^2,\qquad
f_0=\frac{1}{2\pi}\sqrt{\frac{2qI_G}{\frac{16}{15}kTC_{gs}^2}},
$$

其中 $f_0$ 是点谱密度相等的频率：

$$
f_0=\frac{1}{2\pi}\sqrt{\frac{1.6\times10^{-35}\ \mathrm{A^2/Hz}}{(4.43\times10^{-21}\ \mathrm J)(5.17\times10^{-27}\ \mathrm{F^2})}}=\frac{8.36\times10^5\ \mathrm{rad/s}}{2\pi}=133\ \mathrm{kHz}.
$$

因此

$$
f_{BW}=\sqrt3\,f_0=\sqrt3\,(133\ \mathrm{kHz})=231\ \mathrm{kHz}.
$$

总量相等的频率高于点谱密度相等的频率，因为低于 $f_0$ 时散粒噪声在积分中占主导，耦合噪声必须在部分频带内超过它才能追平。
